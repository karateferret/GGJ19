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

import com.acornui.async.then
import com.acornui.collection.ArrayList
import com.acornui.collection.poll
import com.acornui.component.layout.algorithm.CanvasLayoutContainer
import com.acornui.component.stage
import com.acornui.component.text.text
import com.acornui.core.asset.AssetType
import com.acornui.core.asset.load
import com.acornui.core.di.Owned
import com.acornui.core.nav.NavBindable
import com.acornui.core.observe.dataBinding
import com.acornui.core.observe.or
import com.acornui.signal.bind
import ggj19.model.*

/**
 * @author nbilyk
 */
class GGJ19(owner: Owned) : CanvasLayoutContainer(owner), NavBindable {

	private val atlasPath = "assets/ggj.json"

	private val levels = dataBinding(listOf(GameLevel()))
	private val currentLevel = dataBinding(0)

	init {
		Skin(stage).apply()

		load("assets/levelData.txt", AssetType.TEXT).then {
			levels.value = parseGameData(it)
		}

		val levelView = +LevelView(this).apply {
			(levels or currentLevel).bind {
				originalData.value = levels.value.getOrNull(currentLevel.value) ?: emptyLevel
			}
		} layout { fill() }

		(levels or currentLevel).bind {
			if (levels.value.isNotEmpty() && currentLevel.value >= levels.value.size) {
				levelView.visible = false
				+text("Victory!!!") layout { center() }
			}
		}

//		+rect {
//			style.backgroundColor = Color(0f, 0f, 0f, 0.3f)
//		} layout { widthPercent = 1f; height = 40f }
//		+hGroup {
//			+text {
//				currentLevel.bind {
//					text = "Level $it"
//				}
//			}
//		} layout { left = 10f; top = 10f }

	}
}

fun parseGameData(str: String): List<GameLevel> {
	val lines = str.split("\n").toMutableList()
	val levels = ArrayList<GameLevel>()
	while (lines.isNotEmpty()) {
		lines.eatEmptyLines()
		val grid = ArrayList(GameLevel.MAX_ROWS) { ArrayList(GameLevel.MAX_COLS) { Tile() } }
		for (row in 0 until GameLevel.MAX_ROWS) {
			val cols = lines.poll().trim().split(" ")
			for (col in 0 until GameLevel.MAX_COLS) {
				if (cols[col] != ".") {
					grid[row][col] = Tile(roomType = RoomType.STANDARD)
				}
			}
		}
		lines.eatEmptyLines()
		val queue = lines.poll()
		val queueChars = queue.split(" ")
		val pendingCharacters = ArrayList<GameCharacter>()
		for (queueChar in queueChars) {
			pendingCharacters.add(GameCharacter(type = GameCharacterType.fromLetter(queueChar[0])))
		}
		levels.add(GameLevel(pendingCharacters, grid))
		lines.eatEmptyLines()
	}

	return levels
}

private fun MutableList<String>.eatEmptyLines() {
	while (isNotEmpty() && (this[0].isBlank() || this[0].startsWith("#"))) {
		poll()
	}
}