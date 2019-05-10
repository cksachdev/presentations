module.exports = {
  ECML : {
    "theme": {
      "id": "theme",
      "version": "1.0",
      "startStage": "",
      "stage": [
        {
          "x": 0,
          "y": 0,
          "w": 100,
          "h": 100,
          "id": "",
          "rotate": null,
          "config": {
            "__cdata": "{\"opacity\":100,\"strokeWidth\":1,\"stroke\":\"rgba(255, 255, 255, 0)\",\"a
utoplay\":false,\"visible\":true,\"color\":\"#FFFFFF\",\"genieControls\":false,\"instructions\":\"\"
}"
          },
          "manifest": {
            "media": [
              {
                "assetId": "QuizImage"
              },
              {
                "assetId": "org.ekstep.questionset.audioicon"
              },
              {
                "assetId": "org.ekstep.questionset.default-imgageicon"
              }
            ]
          },
          "org.ekstep.questionset": [
            {
              "x": 9,
              "y": 6,
              "w": 80,
              "h": 85,
              "rotate": 0,
              "z-index": 0,
              "id": "6908a584-23a6-41b0-9e8c-c35cc25d5b1c",
              "data": {
                "__cdata": ""
              },
              "config": {
                "__cdata": "{\"title\":\"VB_QUESTION SET\",\"max_score\":1,\"allow_skip\":true,\"sho
w_feedback\":true,\"shuffle_questions\":false,\"shuffle_options\":false,\"total_items\":1,\"btn_edit
\":\"Edit\"}"
              },
              "org.ekstep.question": [
                {
                  "id": "",
                  "type": "mcq",
                  "pluginId": "org.ekstep.questionunit.mcq",
                  "pluginVer": "1.1",
                  "templateId": "horizontalMCQ",
                  "data": {
                    "__cdata": ""
                  },
                  "config": {
                    "__cdata": ""
                  },
                  "w": 80,
                  "h": 85,
                  "x": 9,
                  "y": 6
                } 
              }
              ]
            }
          ]
        }
      ],
      "manifest": {
        "media": [
          {
            "id": "5dd4480b-77b9-4389-96b5-a1b16a08a478",
            "plugin": "org.ekstep.navigation",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.navigation-1.0/renderer/controller/navigation_ctrl.j
s",
            "type": "js"
          },
          {
            "id": "73c58894-aa3d-4660-80e7-80d64a9b71d0",
            "plugin": "org.ekstep.navigation",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.navigation-1.0/renderer/templates/navigation.html",
            "type": "js"
          },
          {
            "id": "org.ekstep.navigation",
            "plugin": "org.ekstep.navigation",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.navigation-1.0/renderer/plugin.js",
            "type": "plugin"
          },
          {
            "id": "org.ekstep.navigation_manifest",
            "plugin": "org.ekstep.navigation",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.navigation-1.0/manifest.json",
            "type": "json"
          },
          {
            "id": "org.ekstep.questionunit.renderer.audioicon",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/assets/audio-icon.png",
            "type": "image"
          },
          {
            "id": "org.ekstep.questionunit.renderer.downarrow",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/assets/down_arrow.png",
            "type": "image"
          },
          {
            "id": "5819a985-9424-42a6-9575-0746b8898473",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/components/js/components.j
s",
            "type": "js"
          },
          {
            "id": "985eb828-2267-4a26-8653-e970861e3524",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/components/css/components.
css",
            "type": "css"
          },
          {
            "id": "714c04b0-375b-44a7-a4c5-0050b6c53821",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/katex.min.js",
            "type": "js"
          },
          {
            "id": "2b1b3bd8-1085-4602-b073-ba72cb7b23b9",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/katex.min.css",
            "type": "css"
          },
          {
            "id": "87ddde8a-8b24-4845-be87-d001677a18ea",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_mai
n-bold.ttf",
            "type": "js"
          },
          {
            "id": "65c8a547-29a7-422e-b3e1-8aeab50dc47c",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_mai
n-bolditalic.ttf",
            "type": "js"
          },
          {
            "id": "d893ea0d-e91d-4198-8581-ee7bdd126cab",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_mai
n-italic.ttf",
            "type": "js"
          },
          {
            "id": "919b3601-6edb-4a8d-8874-6d1d8cc7d597",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_mai
n-regular.ttf",
            "type": "js"
          },
          {
            "id": "cecde55d-518b-4684-8640-be69dd74d465",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_mat
h-bolditalic.ttf",
            "type": "js"
          },
          {
            "id": "983e9e3a-375b-40a5-9bc6-bc16dc11221d",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_mat
h-italic.ttf",
            "type": "js"
          },
          {
            "id": "95c62144-091c-485a-8c40-d1ec37011ab1",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_mat
h-regular.ttf",
            "type": "js"
          },
          {
            "id": "e2d74592-3975-4b6c-a281-8bec84202c6e",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_siz
e1-regular.ttf",
            "type": "js"
          },
          {
            "id": "b9e53c9c-8d21-4e6e-876c-83131136644d",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_siz
e2-regular.ttf",
            "type": "js"
          },
          {
            "id": "25eb7302-0d05-4ee2-96ed-93b28a85c0c1",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_siz
e3-regular.ttf",
            "type": "js"
          },
          {
            "id": "9ce44da1-77d2-423a-b824-b7185402bb9b",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/libs/katex/fonts/katex_siz
e4-regular.ttf",
            "type": "js"
          },
          {
            "id": "org.ekstep.questionunit",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/renderer/plugin.js",
            "type": "plugin"
          },
          {
            "id": "org.ekstep.questionunit_manifest",
            "plugin": "org.ekstep.questionunit",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionunit-1.0/manifest.json",
            "type": "json"
          },
          {
            "id": "24208287-95e3-4b15-a3b6-176e51162605",
            "plugin": "org.ekstep.questionunit.mcq",
            "ver": "1.1",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/renderer/styles/style.css",
            "type": "css"
          },
          {
            "id": "dd862b10-e9ad-4938-a300-79e893808d7e",
            "plugin": "org.ekstep.questionunit.mcq",
            "ver": "1.1",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/renderer/styles/horizontal_and_
vertical.css",
            "type": "css"
          },
          {
            "id": "477d1a6e-86cc-46d4-92ad-659cd1811ad6",
            "plugin": "org.ekstep.questionunit.mcq",
            "ver": "1.1",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/renderer/template/mcq-layouts.j
s",
            "type": "js"
          },
          {
            "id": "aa5a6e8d-7550-4d95-ad40-a4618a6d8b3b",
            "plugin": "org.ekstep.questionunit.mcq",
            "ver": "1.1",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/renderer/template/template_cont
roller.js",
            "type": "js"
          },
          {
            "id": "9765e062-4a5b-4d65-bd74-1bc45950856e",
            "plugin": "org.ekstep.questionunit.mcq",
            "ver": "1.1",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/renderer/assets/tick_icon.png",
            "type": "image"
          },
          {
            "id": "164ab6e7-4751-45c4-830e-c70984e0a45e",
            "plugin": "org.ekstep.questionunit.mcq",
            "ver": "1.1",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/renderer/assets/audio-icon2.png
",
            "type": "image"
          },
          {
            "id": "7c0d6d5d-9109-4449-b656-4e7cc3d7e8ed",
            "plugin": "org.ekstep.questionunit.mcq",
            "ver": "1.1",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/renderer/assets/music-blue.png"
,
            "type": "image"
          },
          {
            "id": "org.ekstep.questionunit.mcq",
            "plugin": "org.ekstep.questionunit.mcq",
            "ver": "1.1",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/renderer/plugin.js",
            "type": "plugin"
          },
          {
            "id": "org.ekstep.questionunit.mcq_manifest",
            "plugin": "org.ekstep.questionunit.mcq",
            "ver": "1.1",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/manifest.json",
            "type": "json"
          },
          {
            "id": "org.ekstep.questionset.quiz",
            "plugin": "org.ekstep.questionset.quiz",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionset.quiz-1.0/renderer/plugin.js",
            "type": "plugin"
          },
          {
            "id": "org.ekstep.questionset.quiz_manifest",
            "plugin": "org.ekstep.questionset.quiz",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionset.quiz-1.0/manifest.json",
            "type": "json"
          },
          {
            "id": "org.ekstep.iterator",
            "plugin": "org.ekstep.iterator",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.iterator-1.0/renderer/plugin.js",
            "type": "plugin"
          },
          {
            "id": "org.ekstep.iterator_manifest",
            "plugin": "org.ekstep.iterator",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.iterator-1.0/manifest.json",
            "type": "json"
          },
          {
            "id": "9b64d073-35d0-4a7d-ac5b-7628da015c2e",
            "plugin": "org.ekstep.questionset",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionset-1.0/renderer/utils/telemetry_logger.js",
            "type": "js"
          },
          {
            "id": "3d244815-bb4a-4b79-a109-c331441b4a3e",
            "plugin": "org.ekstep.questionset",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionset-1.0/renderer/utils/html_audio_plugin.js"
,
            "type": "js"
          },
          {
            "id": "ced980e0-754b-4331-b256-e6103c74ca21",
            "plugin": "org.ekstep.questionset",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionset-1.0/renderer/utils/qs_feedback_popup.js"
,
            "type": "js"
          },
          {
            "id": "org.ekstep.questionset",
            "plugin": "org.ekstep.questionset",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionset-1.0/renderer/plugin.js",
            "type": "plugin"
          },
          {
            "id": "org.ekstep.questionset_manifest",
            "plugin": "org.ekstep.questionset",
            "ver": "1.0",
            "src": "/content-plugins/org.ekstep.questionset-1.0/manifest.json",
            "type": "json"
          },
          {
            "id": "QuizImage",
            "src": "/content-plugins/org.ekstep.questionset-1.0/editor/assets/quizimage.png",
            "assetId": "QuizImage",
            "type": "image",
            "preload": true
          },
          {
            "id": "org.ekstep.questionset.audioicon",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/renderer/assets/audio.png",
            "assetId": "org.ekstep.questionset.audioicon",
            "type": "image",
            "preload": true
          },
          {
            "id": "org.ekstep.questionset.default-imgageicon",
            "src": "/content-plugins/org.ekstep.questionunit.mcq-1.1/renderer/assets/default-image.p
ng",
            "assetId": "org.ekstep.questionset.default-imgageicon",
            "type": "image",
            "preload": true
          }
        ]
      },
      "plugin-manifest": {
        "plugin": [
          {
            "id": "org.ekstep.navigation",
            "ver": "1.0",
            "type": "plugin",
            "depends": ""
          },
          {
            "id": "org.ekstep.questionunit",
            "ver": "1.0",
            "type": "plugin",
            "depends": ""
          },
          {
            "id": "org.ekstep.questionunit.mcq",
            "ver": "1.1",
            "type": "plugin",
            "depends": "org.ekstep.questionunit"
          },
          {
            "id": "org.ekstep.questionset.quiz",
            "ver": "1.0",
            "type": "plugin",
            "depends": ""
          },
          {
            "id": "org.ekstep.iterator",
            "ver": "1.0",
            "type": "plugin",
            "depends": ""
          },
          {
            "id": "org.ekstep.questionset",
            "ver": "1.0",
            "type": "plugin",
            "depends": "org.ekstep.questionset.quiz,org.ekstep.iterator"
          }
        ]
      },
      "compatibilityVersion": 2
    }
  },
  QUESTION: {
    "id": "",
    "type": "mcq",
    "pluginId": "org.ekstep.questionunit.mcq",
    "pluginVer": "1.1",
    "templateId": "horizontalMCQ",
    "data": {
      "__cdata": ""
    },
    "config": {
      "__cdata": ""
    },
    "w": 80,
    "h": 85,
    "x": 9,
    "y": 6
  } 
}
