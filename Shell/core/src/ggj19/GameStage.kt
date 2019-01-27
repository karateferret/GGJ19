/*
 * Copyright 2019 GGJ2019
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package ggj19

import com.acornui.collection.ArrayList
import com.acornui.collection.replace
import com.acornui.collection.replaceAt
import com.acornui.component.*
import com.acornui.component.drawing.MeshBuilderStyle
import com.acornui.component.drawing.line
import com.acornui.component.drawing.staticMesh
import com.acornui.component.drawing.staticMeshC
import com.acornui.component.layout.moveTo
import com.acornui.core.cache.recycle
import com.acornui.core.di.Owned
import com.acornui.core.input.Ascii
import com.acornui.core.input.keyDown
import com.acornui.core.observe.dataBinding
import com.acornui.graphic.Color
import com.acornui.math.RayRo
import com.acornui.math.Vector2
import ggj19.model.GameCharacter
import ggj19.model.GameLevel
import ggj19.model.emptyLevel
import ggj19.util.Isometric

class GameStage(owner: Owned) : ElementContainerImpl<UiComponent>(owner) {

	val currentLevel = dataBinding(emptyLevel)

	private val tileViews: List<List<TileView>> = ArrayList(GameLevel.MAX_ROWS) { ArrayList(GameLevel.MAX_COLS) { TileView(this) } }
	private val characters = ArrayList<GameCharacterView>()

	init {
		interactivityMode = InteractivityMode.ALWAYS

		val origin = Isometric.twoDToIso(Vector2(GameLevel.MAX_COLS / 2 * TileView.TILE_SIZE, GameLevel.MAX_ROWS / 2 * TileView.TILE_SIZE))
		setOrigin(origin.x, origin.y)

		initTileViews()
		initCharacters()
		initDebugLines()
	}

	private fun initTileViews() {
		for (row in 0 until GameLevel.MAX_ROWS) {
			for (col in 0 until GameLevel.MAX_COLS) {
				+tileViews[row][col]
				tileViews[row][col].moveTo(Isometric.twoDToIso(col * TileView.TILE_SIZE, row * TileView.TILE_SIZE))
			}
		}

		for (row in 0 until GameLevel.MAX_ROWS) {
			for (col in 0 until GameLevel.MAX_COLS) {
				tileViews[row][col].data.bind { newTile ->
					currentLevel.change {
						it.copy(
								grid = it.grid.replaceAt(row, it.grid[row].replaceAt(col, newTile))
						)
					}
				}
			}
		}

		currentLevel.bind {
			for (row in 0 until GameLevel.MAX_ROWS) {
				for (col in 0 until GameLevel.MAX_COLS) {
					tileViews[row][col].data.value = it.getTile(row, col)!!
				}
			}
		}
	}

	private fun initCharacters() {
		// Characters
		currentLevel.bind { newData ->
			val placedCharacters = newData.characters.filter { it.isPlaced }
			recycle(
					data = placedCharacters,
					existingElements = characters,
					factory = { item, index -> +createGameCharacterView(item) },
					configure = { element, item, index -> element.data.value = item },
					disposer = { element -> element.dispose() },
					retriever = { element -> element.data.value },
					equality = { o1, o2 -> o1?.id == o2?.id }
			)
		}
	}

	private fun initDebugLines() {
		// Debug lines
		+staticMeshC {
			visible = false
			stage.keyDown().add {
				if (it.ctrlKey && it.keyCode == Ascii.D) {
					visible = !visible
				}
			}
			mesh = staticMesh {
				buildMesh {
					//							MeshBuilderStyle.lineStyle.colorTint = Color(0.25f, 0.25f, 0.25f, 1f)
					MeshBuilderStyle.lineStyle.colorTint = Color.RED

					for (row in 0..GameLevel.MAX_ROWS) {
						val ptA = Isometric.twoDToIso(Vector2(0f, row * TileView.TILE_SIZE))
						val ptB = Isometric.twoDToIso(Vector2(GameLevel.MAX_ROWS * TileView.TILE_SIZE, row * TileView.TILE_SIZE))
						line(ptA.x, ptA.y, ptB.x, ptB.y)
					}
					for (col in 0..GameLevel.MAX_COLS) {
						val ptA = Isometric.twoDToIso(Vector2(col * TileView.TILE_SIZE, 0f))
						val ptB = Isometric.twoDToIso(Vector2(col * TileView.TILE_SIZE, GameLevel.MAX_ROWS * TileView.TILE_SIZE))
						line(ptA.x, ptA.y, ptB.x, ptB.y)
					}
				}
			}
		}
	}

	private fun createGameCharacterView(character: GameCharacter): GameCharacterView {
		return GameCharacterView(this, character).apply {
			defaultWidth = 32f
			defaultHeight = 32f
			data.changed.add { old, new ->
				currentLevel.change {
					it.copy(characters = it.characters.replace(old, new))
				}
			}
		}
	}

	override fun getChildrenUnderPoint(canvasX: Float, canvasY: Float, onlyInteractive: Boolean, returnAll: Boolean, out: MutableList<UiComponentRo>, rayCache: RayRo?): MutableList<UiComponentRo> {
		return super.getChildrenUnderPoint(canvasX, canvasY, onlyInteractive, returnAll, out, rayCache)
	}
}