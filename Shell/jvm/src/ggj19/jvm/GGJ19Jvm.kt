/*
 * Copyright 2018 PolyForest
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

package ggj19.jvm

import com.acornui.component.stage
import com.acornui.core.AppConfig
import com.acornui.core.GlConfig
import com.acornui.core.WindowConfig
import com.acornui.jvm.LwjglApplication
import ggj19.GGJ19

fun main(args: Array<String>) {
	LwjglApplication().start(AppConfig(frameRate = 60, window = WindowConfig(title = "GGJ19"), gl = GlConfig(antialias = false))) {
		stage.addElement(GGJ19(this))
	}
}