'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "86d00c4c5e7900fa2b31e0f431abed6f",
"assets/assets/audio/sample.mp3": "890f1837fd0ebff89f4e9a93b0e6d71d",
"assets/assets/bear.png": "8f282fb18c45fcb2c72ce0f6c84d9ff8",
"assets/assets/bird.png": "20ad8a8736e89f3744c7ade4f2ef93fd",
"assets/assets/cat.png": "479ead8b4006ddfe5139a358a3ff7ae3",
"assets/assets/crab.png": "4f47a2255f9852e90db5f88592f44e58",
"assets/assets/crocodile.png": "8b5c0804ff579468f452c0c50160ff70",
"assets/assets/dalmatian.png": "8f42efbed21b62b975fc3e2be9fa8e11",
"assets/assets/elephant.png": "cc3d6df1c98c623ddbadae6edbafef86",
"assets/assets/farm.png": "33f973c625e9f7f6c4fb6edd2334f893",
"assets/assets/fish.png": "7401da5101e1f46fc9138748b1fd87ca",
"assets/assets/fox.png": "7c7100c52bf7a13b77f5ad694e0fd6a1",
"assets/assets/giraffe.png": "447b55c7a18920b553f702584ab7846e",
"assets/assets/goat.png": "a6b0daa748d7b798041391343035d2f2",
"assets/assets/hippo.png": "45149186b1e8b35aaea4e875c93b4d03",
"assets/assets/horse.png": "5d90bea4d9c87e699d74ce710022a942",
"assets/assets/jungle.png": "49c13121cf0f13b2978ccf0b4b391fcd",
"assets/assets/kangaroo.png": "708d6cc26231b92d55f3c5c22c2b237e",
"assets/assets/lion.png": "aa42cbae0f6c18acf16f83e7b79031ff",
"assets/assets/listening_images/cat_seesaw.png": "00c771906ffff6edf927f4fd4cc9b8da",
"assets/assets/listening_images/cat_slide.png": "fc91bec41d3977cecc85c9f6d06371ab",
"assets/assets/listening_images/cat_swing.png": "f1f61e74ada2deaae9a92c4d53849d63",
"assets/assets/listening_images/pigs_back.png": "29e4dd072bb692ecebe9e79ee5ab7980",
"assets/assets/listening_images/pigs_by.png": "a52842e495c3a51209dd93b9daa9837c",
"assets/assets/listening_images/pigs_front.png": "e514aea37a856478c6b979e762546c47",
"assets/assets/listening_images/pig_sheep.png": "dc0e658ff1b413063ce73bb9f7e23748",
"assets/assets/monkey.png": "09b153b10e0eca1d5886aae0d5269e06",
"assets/assets/mouse.png": "f582b28f5ec0475026490799ddf50c71",
"assets/assets/parrot.png": "7077c4a2c65cdd58d73fcf55a0baf938",
"assets/assets/pig.png": "f5e55468980ccc8cb3f13d91c70f0258",
"assets/assets/rabbit.png": "a95a62f51c12d068ad391e2653326b01",
"assets/assets/seal.png": "6f88e388a9ef08ad843a47f4a003f3a9",
"assets/assets/shark.png": "74b04c9455d3d3286a8b2dad0a7eda35",
"assets/assets/snake.png": "bd988549c7ac2dc3cbf18924f8465024",
"assets/assets/tiger.png": "99dcf6fcfe79f9f238bb472e3076e210",
"assets/assets/zebra.png": "8bf9fb337784653b430f0e61d32485b6",
"assets/FontManifest.json": "d7ac4999ea2351e16eaf500b44b94de2",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/montserrat/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/fonts/montserrat/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/fonts/montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/montserrat/Montserrat-BoldItalic.ttf": "1b38414956c666bd1df78fe5b9c84756",
"assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf": "52a50ca037f2f96fa567404dc3c5bdfb",
"assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf": "1170df5548b7e238df5fa14b6f1a753e",
"assets/fonts/montserrat/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/fonts/montserrat/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/fonts/montserrat/Montserrat-LightItalic.ttf": "01c4560c9c15069b6700ce7ad2e49a9c",
"assets/fonts/montserrat/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/montserrat/Montserrat-MediumItalic.ttf": "40a74702035bf9ef19053c84ce9a58b9",
"assets/fonts/montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/montserrat/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf": "83c1ec1f1db9a6416791f7d9d29536f2",
"assets/fonts/montserrat/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/fonts/montserrat/Montserrat-ThinItalic.ttf": "3c2b290f95cd5b33c3ead2911064a2ab",
"assets/fonts/open_sans/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/fonts/open_sans/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/fonts/open_sans/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/fonts/open_sans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/fonts/open_sans/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/fonts/Raleway-Black.ttf": "46818ebd4f76c4e6fe9b030dbc74f5cf",
"assets/fonts/Raleway-BlackItalic.ttf": "956d40aa9747deb39f8b93793803bc9d",
"assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"assets/fonts/Raleway-BoldItalic.ttf": "400d6e7c7df487961a0f1426a73fff68",
"assets/fonts/Raleway-ExtraBold.ttf": "be3bf63a30b4523ae221bd4358b13e8f",
"assets/fonts/Raleway-ExtraBoldItalic.ttf": "05c7000a5498523bbd184902d124c382",
"assets/fonts/Raleway-ExtraLight.ttf": "d2a8929f630cba5875d97a5f34da6162",
"assets/fonts/Raleway-ExtraLightItalic.ttf": "c8c27816a4b4b6fdfd4a8c944bd2c8ff",
"assets/fonts/Raleway-Italic.ttf": "b43297391b7d5d5d7b135958668c1876",
"assets/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/fonts/Raleway-LightItalic.ttf": "e2a70086178378a6165ad7b032ee1077",
"assets/fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"assets/fonts/Raleway-MediumItalic.ttf": "d3aded9f5da961c952a9c6c41d77f681",
"assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/fonts/Raleway-SemiBold.ttf": "5a25c50b181b07279489ce5bb6a9545c",
"assets/fonts/Raleway-SemiBoldItalic.ttf": "b8ea2e82df9aeaf774c081dffb3b46e8",
"assets/fonts/Raleway-Thin.ttf": "5faedfece17998f456bf5b32b100b597",
"assets/fonts/Raleway-ThinItalic.ttf": "b4fdd9b19ccaa454c97e1ba2b1364815",
"assets/NOTICES": "b23fe88d3fe4860e07556bcbdc54953a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"howler.js": "2bba823e6b4d71ea019d81d384672823",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5df68ef02f40f7317ad8eb8e542f490c",
"/": "5df68ef02f40f7317ad8eb8e542f490c",
"main.dart.js": "6e4bf65f1a6f3a125eeded98c592ecc4",
"manifest.json": "40cc96e86f5b3a6a735669b2c2f89070",
"sound_assets/ANIMALS/animals/bear.mp3": "09d5ae9b1d31dc500f88cee54c3f20ec",
"sound_assets/ANIMALS/animals/bird.mp3": "cbd84f87f097975f23a9bac4fc22ee2f",
"sound_assets/ANIMALS/animals/cat.mp3": "ea096d0d3947db33dd58b12137be3808",
"sound_assets/ANIMALS/animals/crab.mp3": "63ee6dc027afbfc96392ddca7f008b41",
"sound_assets/ANIMALS/animals/crocodile.mp3": "8e5dc6a7650ac4beb0451cd428632453",
"sound_assets/ANIMALS/animals/dog.mp3": "9c2642c0a547c7e066539192287221b8",
"sound_assets/ANIMALS/animals/elephant.mp3": "b52b0707d0e84a1b9ea4b1876249e7c3",
"sound_assets/ANIMALS/animals/fish.mp3": "d958c4d14121ffa437d255a6574f21f2",
"sound_assets/ANIMALS/animals/fox.mp3": "749651fc982d9b5adfa15d28c67afec1",
"sound_assets/ANIMALS/animals/giraffe.mp3": "f34bb9b248a98836e92e9b77af73faea",
"sound_assets/ANIMALS/animals/goat.mp3": "b9075f112e70f8eb37dc72321cd54836",
"sound_assets/ANIMALS/animals/horse.mp3": "85d4270eceb1c1b4aa4d71d9fd72d24b",
"sound_assets/ANIMALS/animals/lion.mp3": "fc1e0895b86772bf3801406141fab9f9",
"sound_assets/ANIMALS/animals/monkey.mp3": "0ed1359080818907b7c8cf618345e4cc",
"sound_assets/ANIMALS/animals/mouse.mp3": "a2db6afb344539a9c5222acdadff377e",
"sound_assets/ANIMALS/animals/parrot.mp3": "fdf7ab28513f21236eb50042c527ab25",
"sound_assets/ANIMALS/animals/pig.mp3": "2c0c40acb2dd197eedc4d14fb462d284",
"sound_assets/ANIMALS/animals/rabbit.mp3": "dd51f7785e442e7ebaa53c12c7125ef9",
"sound_assets/ANIMALS/animals/seal.mp3": "3e738c4a0623cf92df7bd48dc1f30b60",
"sound_assets/ANIMALS/animals/shark.mp3": "79cb8a90848eb1c5586ad19c241f6e68",
"sound_assets/ANIMALS/animals/snake.mp3": "ebd602d0d11653d1aa589ad0ebe88496",
"sound_assets/ANIMALS/animals/tiger.mp3": "17a112fbedfe7c79ded18b7e56176dd0",
"sound_assets/ANIMALS/animals/zebra.mp3": "fd57b48750f2491dcc05bf4576a934e2",
"sound_assets/ANIMALS/Level1/1_Wild_animals/bear.mp3": "09d5ae9b1d31dc500f88cee54c3f20ec",
"sound_assets/ANIMALS/Level1/1_Wild_animals/crab.mp3": "63ee6dc027afbfc96392ddca7f008b41",
"sound_assets/ANIMALS/Level1/1_Wild_animals/crocodile.mp3": "8e5dc6a7650ac4beb0451cd428632453",
"sound_assets/ANIMALS/Level1/1_Wild_animals/elephant.mp3": "b52b0707d0e84a1b9ea4b1876249e7c3",
"sound_assets/ANIMALS/Level1/1_Wild_animals/fish.mp3": "d958c4d14121ffa437d255a6574f21f2",
"sound_assets/ANIMALS/Level1/1_Wild_animals/fox.mp3": "749651fc982d9b5adfa15d28c67afec1",
"sound_assets/ANIMALS/Level1/1_Wild_animals/giraffe.mp3": "f34bb9b248a98836e92e9b77af73faea",
"sound_assets/ANIMALS/Level1/1_Wild_animals/lion.mp3": "fc1e0895b86772bf3801406141fab9f9",
"sound_assets/ANIMALS/Level1/1_Wild_animals/monkey.mp3": "0ed1359080818907b7c8cf618345e4cc",
"sound_assets/ANIMALS/Level1/1_Wild_animals/parrot.mp3": "fdf7ab28513f21236eb50042c527ab25",
"sound_assets/ANIMALS/Level1/1_Wild_animals/seal.mp3": "3e738c4a0623cf92df7bd48dc1f30b60",
"sound_assets/ANIMALS/Level1/1_Wild_animals/shark.mp3": "79cb8a90848eb1c5586ad19c241f6e68",
"sound_assets/ANIMALS/Level1/1_Wild_animals/snake.mp3": "ebd602d0d11653d1aa589ad0ebe88496",
"sound_assets/ANIMALS/Level1/1_Wild_animals/tiger.mp3": "17a112fbedfe7c79ded18b7e56176dd0",
"sound_assets/ANIMALS/Level1/1_Wild_animals/zebra.mp3": "fd57b48750f2491dcc05bf4576a934e2",
"sound_assets/ANIMALS/Level1/2_Farm_animals/bird.mp3": "cbd84f87f097975f23a9bac4fc22ee2f",
"sound_assets/ANIMALS/Level1/2_Farm_animals/cat.mp3": "ea096d0d3947db33dd58b12137be3808",
"sound_assets/ANIMALS/Level1/2_Farm_animals/dog.mp3": "9c2642c0a547c7e066539192287221b8",
"sound_assets/ANIMALS/Level1/2_Farm_animals/goat.mp3": "b9075f112e70f8eb37dc72321cd54836",
"sound_assets/ANIMALS/Level1/2_Farm_animals/horse.mp3": "85d4270eceb1c1b4aa4d71d9fd72d24b",
"sound_assets/ANIMALS/Level1/2_Farm_animals/mouse.mp3": "a2db6afb344539a9c5222acdadff377e",
"sound_assets/ANIMALS/Level1/2_Farm_animals/pig.mp3": "2c0c40acb2dd197eedc4d14fb462d284",
"sound_assets/ANIMALS/Level1/2_Farm_animals/rabbit.mp3": "dd51f7785e442e7ebaa53c12c7125ef9",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/cat_fly.mp3": "aafcbc5412dc8a66cb623cfab0fefdcf",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/crocodile_swim.mp3": "ff5f6eda4a0d5f6ab40fb0b86f2cdd63",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/crocodile_talk.mp3": "5dd2aba796d21e36fabe32055331171c",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/fish_jump.mp3": "338a57e6a73269b40f1ebc3734fa1584",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/fish_swim.mp3": "938ae5f4947c5d68de6a1f0cfd5da917",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/giraffe_climb.mp3": "0eb1deb96afccb595c339a2e723dd218",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/monkey_climb.mp3": "4956d3af9789bd14ae44222596b8b299",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/monkey_walk.mp3": "e76a7aa32a50be3cbf14e08cd8dd42ff",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/parrot_swim.mp3": "6e8fd60d1eca9e9a3c10a97aa3d35c31",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/rabbit_run.mp3": "03ea3fd81ed05e3e28175c6d428179bd",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/seal_fly.mp3": "123c7acd77096d6235bb48c589eaeeb0",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/snake_climb.mp3": "cc3ebb42a3d860aeba715358460be3ea",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/snake_walk.mp3": "5a512b0095e24254ab958e7c3b2ac48a",
"sound_assets/ANIMALS/Level1/3_What_can_animals_do/tiger_talk.mp3": "324e1a39940b2b8d395e807deff49810",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/10_shark.mp3": "068533c8d9686b13ec366bb292f65fb6",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/11_mouse.mp3": "407e9b8200d9203e1d720aa4f72fc945",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/12_crocodile.mp3": "47296a961a6fd5a9aa8a61c59ea18ca6",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/1_tiger.mp3": "5ea94ab6edeedf617c235382e01c3e99",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/2_lion.mp3": "1797733ba8a9c19e7d3711699813a18b",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/3_giraffe.mp3": "73b7fc8771c751e48f45bca0b853654e",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/4_parrot.mp3": "91b364c44ee3cc286b58f9a9327d681c",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/5_monkey.mp3": "18b03b67baf05a56762516dc7029c8a7",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/6_zebra.mp3": "deba0c33875dfdeca85e012ae3b73c63",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/7_rabbit.mp3": "f10b37e2efac4ffdb25b5eb5700d9516",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/8_elephant.mp3": "b00c639cefc8ff3495986f6aed15f7f1",
"sound_assets/ANIMALS/Level1/4_Guess_the_animal/9_snake.mp3": "c17cd52e756e93b206adb4279b0a1fd4",
"sound_assets/ANIMALS/Level2/Drag_and_drop/farm_1.mp3": "8c4117e94af68f855dc0d1f617ce9b0c",
"sound_assets/ANIMALS/Level2/Drag_and_drop/farm_2.mp3": "867d86375acb8e50663cf0d2ff0f5957",
"sound_assets/ANIMALS/Level2/Drag_and_drop/farm_3.mp3": "02bd82b1a83fe72eb4bb9692e1d35f99",
"sound_assets/ANIMALS/Level2/Drag_and_drop/farm_4.mp3": "3605ce3794339d98d6d6edecc2630967",
"sound_assets/ANIMALS/Level2/Drag_and_drop/farm_5.mp3": "606a740d89ce96e3190259ca8abc6bd7",
"sound_assets/ANIMALS/Level2/Drag_and_drop/farm_6.mp3": "906a15df3bba5e6c20bd591da3b91a9c",
"sound_assets/ANIMALS/Level2/Drag_and_drop/farm_7.mp3": "adfa8e7b84ac6327d16ab331fd1a4a4f",
"sound_assets/ANIMALS/Level2/Drag_and_drop/farm_8.mp3": "8006fd8deef27bd6c126d588eead0d2f",
"sound_assets/ANIMALS/Level2/Drag_and_drop/jungle_1.mp3": "c674f208db58232f8ad799c7ac173d2f",
"sound_assets/ANIMALS/Level2/Drag_and_drop/jungle_2.mp3": "b764cdab476b893d9d9faf3f4075884c",
"sound_assets/ANIMALS/Level2/Drag_and_drop/jungle_3.mp3": "0dc24c7ae69122c4c706f7885e1a181b",
"sound_assets/ANIMALS/Level2/Drag_and_drop/jungle_4.mp3": "cc17cfa53d66944bf4e1518a1a25bce0",
"sound_assets/ANIMALS/Level2/Drag_and_drop/jungle_5.mp3": "4d3f4e457faacf1fce3854490921969b",
"sound_assets/ANIMALS/Level2/Drag_and_drop/jungle_6.mp3": "27c13d36c7d90ac67b46de74a8f5eaaf",
"sound_assets/ANIMALS/Level2/Drag_and_drop/jungle_7.mp3": "bb7fdeb94416ed7034f75b7822545e2e",
"sound_assets/ANIMALS/Level2/Drag_and_drop/jungle_8.mp3": "ed7c912e4da93842280ed5fdadd24edb",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/1.mp3": "c4a3530b275b55d5c41b85ce2d70abb4",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/10.mp3": "2b16d8c1eb01682cc10ee348bd11baab",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/11.mp3": "37ee85ea765ef657a60b4675c82e9522",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/12.mp3": "0d5b52aea39fe78af700d6226455366a",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/13.mp3": "5df7f969a23f70e976fdde485269bdde",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/14.mp3": "ae89a4d1b237e226cfc0bee6aed01e71",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/15.mp3": "8d412ad58033b17f78c10ae7e6890ebb",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/2.mp3": "cc46768ac893c673a6bd474f3f530a0d",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/3.mp3": "36dbd649735d591693cefe830c424f37",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/4.mp3": "4b31e636a2125cb0aec6c6b6dae2eb3d",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/5.mp3": "907927694969d7bfd868f9d8c6689096",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/6.mp3": "3d73249bcfd9ad14576007fc7945347c",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/7.mp3": "d695faa49232f669df6fd2b9d4dafd13",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/8.mp3": "42424d49e379a405a16a27879a390f2a",
"sound_assets/ANIMALS/Level2/Whats_the_correct_answer/9.mp3": "8608a429478350d32f929f940dc6d08f",
"sound_assets/ANIMALS/Level3/A_sheep_and_a_pig/dialog1.mp3": "e6f53b6dd0380a1fa380d91415d1f509",
"sound_assets/ANIMALS/Level3/A_sheep_and_a_pig/questions.mp3": "d3ffb5bd447a31dc6c5efa278b70967f",
"sound_assets/ANIMALS/Level3/dialog_1.mp3": "d7d934bf882416aac2dc660a506e99dd",
"sound_assets/ANIMALS/Level3/dialog_2.mp3": "f0f601123cdaab201781e9a655676f1a",
"sound_assets/ANIMALS/Level3/dialog_3.mp3": "e6f53b6dd0380a1fa380d91415d1f509",
"sound_assets/ANIMALS/Level3/What_animal_is_it/dialog_2.mp3": "f0f601123cdaab201781e9a655676f1a",
"sound_assets/ANIMALS/Level3/What_animal_is_it/question.mp3": "64592b1207c7f101f3be5fb3af956741",
"sound_assets/ANIMALS/Level3/Wheres_the_cat/dialog_1.mp3": "d7d934bf882416aac2dc660a506e99dd",
"sound_assets/ANIMALS/Level3/Wheres_the_cat/question.mp3": "7443832b3d3ebef495e5d6772e68dd2d",
"sound_assets/correct/good_job.mp3": "72b245fd0c1999a719ad4a3f77063de8",
"sound_assets/correct/great.mp3": "d40e5a3670f3f611a29f440c9a297caa",
"sound_assets/correct/keep_it_up.mp3": "b2875387ad3796435325797f62947ef7",
"sound_assets/correct/keep_up_the_good_work.mp3": "d2540ff512bfff954fd78f5f698fd110",
"sound_assets/correct/thats_correct.mp3": "b30a575a77d3e1838573334cca61f86c",
"sound_assets/correct/thats_the_word.mp3": "2b11a84426bb9d8bc1bd505617657f0b",
"sound_assets/correct/there_you_go.mp3": "b309cacacef8363e0f8ffbec8f0dc91a",
"sound_assets/correct/very_well.mp3": "dc00c078745a94812e1d0369823dbfd3",
"sound_assets/correct/well_done.mp3": "720a3a62dbf454169efd37cb2d383ea9",
"sound_assets/correct/yes.mp3": "458d64e137e539842a95039cb7b307d4",
"sound_assets/incorrect/dont_give_up.mp3": "3fefa517e7812ee36daa3abd2725d00a",
"sound_assets/incorrect/incorrect.mp3": "0cfadbf47bf3b90bdbe66125af4cc0b4",
"sound_assets/incorrect/no.mp3": "f68bebac3cda269de51b1a99bdbd53eb",
"sound_assets/incorrect/not_really.mp3": "de2ddd56da131b70de197b25d8045051",
"sound_assets/incorrect/that_not_the_word.mp3": "85287a5daab7912800f798f6b4cf2961",
"sound_assets/incorrect/try_again.mp3": "3156fa1ba9ae439f05db0d6823cb1807"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
