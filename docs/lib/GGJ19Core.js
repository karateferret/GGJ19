define(['exports', 'kotlin', 'AcornUiCore', 'AcornUtils'], function (_, Kotlin, $module$AcornUiCore, $module$AcornUtils) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var StackLayoutContainer = $module$AcornUiCore.com.acornui.component.StackLayoutContainer;
  var get_stage = $module$AcornUiCore.com.acornui.component.get_stage_xd4dkp$;
  var BasicUiSkin = $module$AcornUiCore.com.acornui.skins.BasicUiSkin;
  var Pad_init = $module$AcornUtils.com.acornui.math.Pad_init_mx4ult$;
  var ScrollPolicy = $module$AcornUiCore.com.acornui.component.scroll.ScrollPolicy;
  var Unit = Kotlin.kotlin.Unit;
  var textArea = $module$AcornUiCore.com.acornui.component.text.textArea_t0y7uh$;
  var scrollArea = $module$AcornUiCore.com.acornui.component.scroll.scrollArea_fanjlz$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var NavBindable = $module$AcornUiCore.com.acornui.core.nav.NavBindable;
  GGJ19.prototype = Object.create(StackLayoutContainer.prototype);
  GGJ19.prototype.constructor = GGJ19;
  function GGJ19(owner) {
    StackLayoutContainer.call(this, owner);
    this.mainText_el1cz8$_0 = this.mainText_el1cz8$_0;
    (new BasicUiSkin(get_stage(this))).apply();
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$(scrollArea(this, GGJ19_init$lambda(this))), GGJ19_init$lambda_0);
  }
  Object.defineProperty(GGJ19.prototype, 'mainText_0', {get: function () {
    if (this.mainText_el1cz8$_0 == null)
      return throwUPAE('mainText');
    return this.mainText_el1cz8$_0;
  }, set: function (mainText) {
    this.mainText_el1cz8$_0 = mainText;
  }});
  function GGJ19_init$lambda$lambda($receiver) {
    $receiver.allowTab = true;
    $receiver.flowStyle.padding = Pad_init(20.0);
    $receiver.hScrollPolicy = ScrollPolicy.AUTO;
    $receiver.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tincidunt mi. Nam elementum feugiat quam. Vestibulum blandit, tortor ut lacinia elementum, enim nunc ultrices tortor, eget eleifend ex lacus vitae mi. Suspendisse massa leo, molestie ac feugiat eleifend, elementum eu ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed mauris elementum, fermentum nisl quis, luctus arcu. Integer aliquet est eget sagittis mollis. Nullam egestas vestibulum feugiat. Fusce pharetra nibh sed nisi pharetra semper. Integer aliquet velit a fermentum egestas. Mauris id quam ut libero imperdiet egestas a sed velit. Nam porta sit amet augue congue rhoncus. Ut blandit finibus orci a blandit. Aliquam eu vulputate lectus, sed efficitur tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDonec elit tortor, aliquet a dictum quis, placerat sit amet magna. In dictum enim ac odio viverra, ac tristique turpis tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam lorem augue, rhoncus ut varius et, malesuada in eros. Nulla ex quam, rutrum in dapibus id, lobortis eget leo. Suspendisse dignissim turpis in bibendum pulvinar. Etiam imperdiet maximus justo, ut egestas ex cursus quis. Praesent vel eleifend ex, eu tincidunt mauris. Proin vel nulla et tortor iaculis ornare a a nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eleifend est quis ante viverra, vitae tempus lectus pharetra. Nullam turpis felis, blandit vehicula enim ac, sagittis fringilla sem. Donec pellentesque lacus laoreet libero efficitur, vel imperdiet diam iaculis. Praesent iaculis elementum enim nec convallis.\n\nDonec id dui posuere, egestas magna vitae, efficitur ligula. Morbi ultrices scelerisque velit id ullamcorper. Nunc mollis, ligula at rhoncus gravida, augue diam sagittis mi, id porttitor magna nunc et est. Phasellus eu enim et lectus auctor dignissim. Morbi augue dolor, fringilla nec laoreet sit amet, tincidunt ac mauris. Vestibulum congue arcu in nunc laoreet, gravida fringilla enim feugiat. Vestibulum sit amet sapien placerat, varius nisl vitae, facilisis nibh. Donec posuere cursus nibh vitae suscipit. Mauris eleifend venenatis feugiat.\n\nMorbi lobortis tristique egestas. Phasellus commodo ac eros et scelerisque. Nulla viverra orci ut elit scelerisque, eget fermentum augue luctus. Integer laoreet, tortor vel ultricies pellentesque, quam arcu condimentum ex, quis efficitur elit mi sit amet felis. Curabitur rhoncus dictum convallis. In hac habitasse platea dictumst. Proin laoreet mi nec nunc venenatis auctor.\n\nDuis nec egestas ante. Mauris pulvinar porttitor erat, non sodales mi. Pellentesque dapibus metus in odio aliquet, vitae feugiat tortor rhoncus. Donec tristique, mi vel eleifend interdum, nibh justo aliquet nisl, sit amet sagittis libero ipsum a est. Duis egestas ut orci sed vehicula. In sed elit sit amet augue dignissim vulputate eget at nunc. Nulla ut urna ac turpis venenatis scelerisque id in lorem. Sed interdum sapien sapien, at pellentesque dolor dictum vitae. Suspendisse nec quam non turpis rhoncus laoreet commodo in magna. Nulla aliquam velit laoreet sapien rutrum, nec aliquam tortor sagittis. Vivamus facilisis tellus vitae consectetur vulputate. Nunc porta eu purus congue viverra. Donec a tempus enim. Morbi a tempor velit, vel faucibus massa.\n\nMaecenas fermentum vitae nunc in convallis. Nulla in finibus purus. Nullam a lorem a augue dictum condimentum nec vel quam. Vestibulum et auctor est. Vestibulum volutpat blandit tellus a dictum. In id suscipit lorem. Nunc metus magna, eleifend sit amet varius a, tempus volutpat massa. Sed ut arcu vel lectus cursus porta. Sed facilisis, ante nec suscipit molestie, turpis justo sagittis lacus, et iaculis magna orci a massa. Duis mollis convallis magna, eget imperdiet orci blandit vitae. Aenean sollicitudin maximus est, in condimentum ex mattis quis. Etiam at urna iaculis, mattis orci vitae, interdum odio. Aenean quis enim urna. Praesent gravida libero ac lorem ultricies, at sodales nulla tristique. Duis ornare non mi ut mattis. Vivamus at tristique elit, at dapibus nisl.\n\nNulla ut lectus lorem. Curabitur sed ligula consectetur eros interdum ullamcorper. Cras non pretium ipsum. Sed cursus tempor justo, eget lobortis leo consequat dapibus. Sed ut augue in ex fringilla ultrices. Nullam eget ultricies velit, quis venenatis lacus. Maecenas diam enim, vulputate a nisi id, laoreet sodales enim. Sed ultricies tortor ligula, et accumsan enim porta ac. Nam sit amet consectetur mauris. Suspendisse aliquet massa id neque elementum ullamcorper.\n\nDonec pellentesque enim ut velit fermentum fringilla. Morbi iaculis tellus a condimentum sollicitudin. Nullam in sapien eget metus fermentum tempus. Duis nulla lectus, blandit vitae imperdiet a, pharetra sit amet nisi. Mauris et quam est. Sed aliquet massa consequat, volutpat eros varius, egestas urna. Sed dignissim fermentum pulvinar. Morbi mi libero, vulputate et finibus at, eleifend ut dolor. Suspendisse urna urna, porta sed varius sit amet, tincidunt in sapien. Vivamus vel lobortis elit. Proin convallis justo metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pharetra ipsum in nunc pharetra, elementum sollicitudin lorem scelerisque. Ut quis bibendum tortor. Sed luctus ultricies ante ac feugiat. Nam dolor mi, lacinia in ipsum et, sollicitudin viverra sem.\n\nAenean et ex nulla. Nullam ligula enim, varius a nibh sed, ornare consequat felis. Curabitur venenatis in nisi scelerisque condimentum. Praesent molestie viverra dapibus. Nullam commodo massa tellus, vel auctor urna sodales eget. Integer nec leo viverra, maximus quam non, maximus enim. Aliquam nisl risus, luctus non interdum ut, efficitur egestas sapien. Curabitur ac ultrices purus. Nam interdum venenatis tortor, congue efficitur nisi venenatis ut. Phasellus pharetra libero vel turpis tristique aliquam. Sed ultricies semper sem, id ullamcorper leo sollicitudin at. Nunc cursus id felis eget molestie. Nullam mattis dapibus lobortis. Etiam ac efficitur libero.\n\nNulla vel commodo lectus. Cras in vehicula magna. Sed et sodales purus, id mollis turpis. Suspendisse molestie lacus in mauris porttitor vestibulum fringilla et nulla. Quisque non turpis non enim egestas egestas. Donec interdum molestie dui, ut imperdiet lorem molestie in. Sed viverra in ipsum non posuere. Donec tincidunt augue eget massa euismod vehicula.\n\nVestibulum sit amet lobortis libero. Sed aliquet imperdiet faucibus. Suspendisse porta massa nec tincidunt malesuada. Proin et pretium ex, quis hendrerit nunc. Donec gravida purus massa, et varius nunc commodo vel. Nunc laoreet mollis nibh, vel sodales velit dapibus laoreet. Vestibulum ornare tincidunt dui, vel viverra sapien consectetur eu. Nam posuere a arcu condimentum molestie.\n\nNullam sed ante non nunc iaculis ultricies. Duis eget urna quis ex vestibulum rutrum. Phasellus eu lacinia enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam neque augue, vulputate in lacus id, maximus ultrices arcu. Cras in aliquet nisi, non vehicula ligula. Aliquam erat volutpat. Vivamus scelerisque tristique velit, vel elementum est pharetra eu. Donec vel leo nec mauris dictum lobortis ac ac purus. Sed quis vehicula justo, non porta lorem. Nullam at accumsan mauris. Vestibulum mollis convallis dui nec egestas. Nam sem mi, efficitur ut semper ut, pellentesque ut metus. Phasellus molestie non sapien eget eleifend. Suspendisse pulvinar pharetra enim ac dignissim. Sed a euismod turpis.\n\nProin fermentum magna eu libero molestie sollicitudin. Vestibulum ultricies orci sed porttitor mattis. Fusce ut orci nisl. Aliquam turpis arcu, fermentum nec ipsum non, tristique euismod est. Phasellus viverra, massa vitae tincidunt vehicula, diam orci ullamcorper sapien, ac hendrerit velit sapien dictum lacus. Ut facilisis risus neque, at tincidunt orci tempor et. Suspendisse gravida nibh sed tincidunt imperdiet. Praesent porta dolor nec nisl mollis molestie. Nunc volutpat, magna sit amet imperdiet viverra, tortor odio accumsan est, nec convallis dui odio a lorem. Nunc semper tincidunt erat, quis efficitur felis pretium ac. Donec et quam at arcu lobortis vestibulum. Fusce imperdiet gravida arcu quis ornare. Vestibulum posuere ornare lobortis. Integer non arcu at sapien dignissim elementum sit amet vitae diam. Morbi accumsan tortor dui, quis aliquet magna varius consectetur. Morbi porttitor felis libero.\n\nQuisque a massa sapien. Nam et libero suscipit est sagittis accumsan vel in elit. Nam non elit non nisl scelerisque consectetur a id nulla. Integer ac auctor nunc, vitae venenatis enim. Quisque faucibus augue purus. Aenean sed risus eu sapien commodo iaculis. Etiam iaculis neque vitae mi feugiat efficitur.\n\nIn hac habitasse platea dictumst. Sed quis egestas arcu, nec convallis libero. Ut eu malesuada elit, nec sodales orci. Aliquam rhoncus nisi orci, sollicitudin rhoncus nunc vestibulum id. Etiam id ornare nisi. Aliquam erat volutpat. Integer vestibulum magna sed ipsum fringilla rutrum. Nam sit amet accumsan felis, at accumsan libero. Ut pharetra enim ipsum, sit amet dignissim felis tristique at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar pretium massa, vel vestibulum sem hendrerit eget. Sed lacus lectus, suscipit eu pellentesque non, vehicula ut justo. Maecenas elementum elit id magna dictum scelerisque. Morbi in massa sit amet felis pellentesque sagittis. Phasellus dictum, mauris nec congue interdum, justo ligula elementum purus, at facilisis lorem nibh eget sem. Sed tincidunt, nisl eu rhoncus semper, nunc urna egestas magna, eget tempor arcu justo a purus.\n\nVivamus congue, felis volutpat iaculis rutrum, tellus enim rutrum ligula, in tincidunt est erat ut nisi. Donec auctor sagittis magna. Aliquam tellus ipsum, aliquam id dolor ut, luctus semper mi. Nam tristique velit id elit venenatis, ac pretium quam euismod. Integer in nisl ut massa ultricies aliquet at et nisl. In condimentum sem non orci posuere, aliquam dictum erat placerat. Etiam quis nisl finibus, venenatis mi quis, dignissim mi. Nunc tincidunt fringilla nunc a tempus. Fusce odio nibh, malesuada at tempor id, facilisis id neque. Aliquam faucibus, neque sed eleifend fermentum, augue urna blandit dui, non rutrum mi dolor nec mauris. Nunc suscipit vel neque non ullamcorper. Vivamus tincidunt feugiat odio, eu eleifend orci dictum feugiat. Nullam vulputate nisi eget erat molestie, quis ullamcorper dui fringilla. Sed gravida orci non orci vestibulum pretium.\n\nSuspendisse suscipit nunc turpis, aliquam varius mauris euismod ut. Etiam vel velit sodales, varius elit vitae, efficitur eros. Vivamus blandit volutpat convallis. Ut nec dignissim tortor. Nam hendrerit dui eu tellus pellentesque sagittis. Aliquam tincidunt arcu ex, et tristique sem porttitor sit amet. Nunc non libero lacus. In in placerat mauris, sit amet condimentum dolor. Vestibulum commodo consectetur nunc, eu aliquam purus consectetur eu.\n\nVivamus eget laoreet purus. Aenean velit tortor, efficitur ac lectus id, varius malesuada justo. Fusce diam nisl, lacinia a tellus ut, finibus varius velit. Aliquam molestie nunc aliquam felis vestibulum, quis dignissim lacus semper. Fusce sed neque auctor, mattis lacus id, aliquam neque. Suspendisse non rhoncus metus, non porttitor est. Vestibulum aliquam mi in lacus hendrerit tempus. Phasellus venenatis mi magna, ac varius urna blandit nec. Donec pellentesque sit amet purus ac porttitor. Aliquam in quam nec nisl pulvinar venenatis. Quisque ipsum turpis, convallis vel ipsum at, molestie dignissim nisl. Fusce a diam sit amet elit mollis posuere et nec neque. In eleifend ligula urna, et pretium elit tristique eget.\n\nCurabitur rhoncus nunc non accumsan suscipit. Vivamus justo arcu, gravida vitae faucibus ac, bibendum quis dolor. Sed a blandit sapien. Mauris auctor eu arcu quis lobortis. Aenean rhoncus urna quis erat rhoncus, quis pellentesque libero fermentum. Donec et quam porta, lacinia ligula ac, imperdiet felis. Etiam blandit laoreet ligula id accumsan. Maecenas tincidunt lorem et diam egestas semper. Mauris consectetur sed sem vitae varius. Nullam feugiat erat vel metus tincidunt consectetur. Aenean pulvinar metus et nibh placerat lacinia. Aliquam mattis facilisis ante. Donec viverra mattis quam, vitae tristique quam viverra eu. Integer quam nulla, lacinia at metus sed, dignissim efficitur diam.\n\nNullam finibus urna non tincidunt egestas. Sed id lorem sed massa gravida maximus. Duis iaculis vel turpis quis iaculis. Aliquam id ultrices sem. Morbi euismod volutpat semper. Curabitur euismod elementum luctus. Morbi tempor egestas nisi non faucibus. Ut vitae hendrerit neque. Vivamus dignissim libero sed sapien congue, non malesuada lacus porttitor. Sed mauris urna, lobortis ac enim vel, porttitor mattis lectus. Quisque sem odio, lacinia eget tortor a, rutrum ultrices orci. Praesent at orci in tellus semper commodo. Quisque dictum aliquet ornare. Quisque placerat purus lectus, nec venenatis sapien ultrices id.\n\nCurabitur ante sem, dictum ultrices aliquam id, vulputate ut eros. Maecenas euismod venenatis erat, sed tempus elit fermentum ut. Donec sollicitudin, risus at sodales sodales, enim libero gravida ante, eu tristique elit sem ac ligula. Nullam nec neque mi. Sed tincidunt quis ex ut eleifend. Morbi pellentesque, est eget ultricies faucibus, leo turpis accumsan leo, cursus lobortis lacus orci ac tortor. Donec dictum eget ante vel lacinia. Nam congue nulla non vehicula porta. Sed arcu justo, dictum aliquet est at, pharetra aliquet nisl. Nunc lectus libero, ornare ac finibus vitae, commodo sed quam.\n\nDonec mauris enim, hendrerit sit amet sem at, viverra sagittis est. Nunc nec ligula et leo mattis pretium. Aliquam vulputate elit nunc, sit amet fermentum tortor volutpat ut. Phasellus turpis nisl, venenatis id interdum vitae, ullamcorper sit amet nunc. Mauris at aliquet orci, at commodo ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam quis sodales nibh. Suspendisse at condimentum diam. Proin in felis vehicula, dapibus sem vel, pharetra nulla. Quisque eu metus fermentum, accumsan quam quis, volutpat sapien.\n\nVivamus fermentum, est iaculis auctor feugiat, urna augue porttitor velit, ornare gravida dolor felis eget magna. Suspendisse consectetur turpis at erat rutrum, non pulvinar metus sodales. Etiam pretium justo augue, sit amet eleifend ante laoreet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat nibh ac ipsum consequat, ut convallis leo imperdiet. Nulla mollis ipsum quis urna ultricies, vitae vestibulum quam vehicula. Ut tempor enim in pretium auctor. Vivamus nec elit quis erat elementum sodales quis eget est. Curabitur eget nulla id erat rutrum rhoncus. Donec sed arcu eget turpis euismod rutrum. Aliquam iaculis nibh vel laoreet convallis. Aliquam ut maximus felis. Praesent id mi eu nibh consequat accumsan.\n\nEtiam bibendum dolor eget nulla tincidunt, a commodo nulla semper. Curabitur felis dui, ullamcorper at enim in, interdum consequat nunc. Proin euismod vehicula mi, quis ultrices lacus gravida at. Curabitur facilisis quam ut nibh molestie, et blandit elit rhoncus. Aenean laoreet ex a tristique blandit. Quisque eu ullamcorper sapien, sit amet posuere tellus. Mauris vestibulum ut est nec aliquet. Sed luctus ligula et enim eleifend, sit amet elementum libero rhoncus. Proin sed lorem id leo vehicula placerat. In laoreet condimentum nisi nec blandit. Curabitur sit amet mi id odio pretium varius vel id arcu. Fusce sodales lectus vitae viverra condimentum. Cras eu dictum enim. Nulla interdum, ligula at imperdiet egestas, orci leo elementum ligula, vitae malesuada elit neque in purus.\n\nEtiam ut hendrerit nisl, nec fermentum purus. Nunc consectetur mauris et erat blandit varius. Ut interdum justo sit amet facilisis efficitur. Praesent commodo libero vitae orci varius, ac varius sem porttitor. Nunc bibendum pharetra metus sit amet convallis. Quisque porta finibus consequat. Nullam vitae elit in lacus blandit pharetra. Etiam tristique tortor et ipsum facilisis, a commodo augue viverra. Duis venenatis turpis a nisi semper, non vulputate velit laoreet.\n\nVivamus sit amet tempus mauris, et vulputate ligula. Donec justo purus, luctus in eleifend placerat, euismod non sem. Cras interdum ut metus nec interdum. Quisque iaculis eu neque cursus tempus. Phasellus imperdiet vulputate blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vel pulvinar magna. Etiam mattis nisi ac facilisis bibendum. Pellentesque nunc lorem, hendrerit et odio nec, semper congue sem. Sed tristique mauris non hendrerit accumsan. In sollicitudin ipsum orci, nec hendrerit ex varius ac. Nullam sit amet ligula sit amet neque vulputate vestibulum eget in nulla. Duis rutrum, odio in viverra lobortis, erat libero viverra tellus, et tempor augue lorem vitae quam. Nullam ultrices ut nulla et lacinia.\n\nVivamus pellentesque ipsum eu sapien euismod, semper fermentum massa imperdiet. Praesent at augue vitae nisl rutrum egestas. Quisque a risus sit amet lectus pulvinar pellentesque. Donec sit amet magna vel quam dictum pulvinar vitae a urna. Nunc felis nulla, tincidunt ac nibh non, faucibus volutpat orci. Aliquam volutpat tortor in pretium varius. Aenean sodales nisi et tortor commodo, vitae rhoncus augue convallis. Etiam accumsan eget risus a fringilla. Nulla eget volutpat justo, non ornare magna. Sed eu consectetur tortor. Cras non tellus mollis eros ullamcorper cursus et sit amet lacus. Etiam quis hendrerit erat. Donec sodales ipsum nisi, eu auctor nisl laoreet vel. Etiam et est consectetur, congue lectus ut, scelerisque lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n\nSuspendisse vitae turpis eu mi sollicitudin eleifend vitae a neque. Suspendisse vel urna porttitor, sodales mi eu, aliquet velit. Proin faucibus id nunc in sollicitudin. Nullam orci est, iaculis vitae sollicitudin quis, lobortis eu magna. Nullam elementum facilisis lacus et aliquam. Donec tincidunt pellentesque vulputate. Sed placerat ac sem vitae elementum. Proin vehicula, enim eu finibus vestibulum, neque tellus luctus massa, a porttitor justo orci at tortor. Praesent in dolor eu eros hendrerit egestas. Aliquam quis dapibus libero. Nulla venenatis turpis ut posuere faucibus. Sed nulla dui, eleifend ut pretium id, condimentum eu turpis. Pellentesque id semper ex, in hendrerit felis. Mauris aliquet, ex non finibus pretium, est tellus interdum risus, vitae imperdiet quam velit vitae elit.\n\nCurabitur molestie augue quam, id auctor elit tempus sit amet. Aliquam pretium sapien eget dapibus efficitur. Nunc sit amet lorem viverra, auctor lacus a, mollis ligula. Vivamus rutrum a nulla eu pretium. Nam eget neque quis libero commodo accumsan. Praesent mi elit, dictum finibus nulla a, ornare varius nisi. Nullam elit augue, vestibulum ut ligula nec, egestas blandit tortor. Sed pretium velit vel mauris sodales, et vestibulum urna efficitur.\n\nNulla commodo vestibulum elit id pellentesque. Duis auctor lacus vel feugiat dignissim. Vestibulum posuere interdum nisl, semper semper ante commodo vitae. Proin et luctus felis. Sed ornare et magna vel varius. Etiam dui enim, viverra sit amet dictum sit amet, efficitur eu enim. Nam massa ligula, ullamcorper et libero in, pulvinar blandit metus. Etiam et volutpat ex. Nam ac nunc sed ante porttitor lobortis quis eget arcu. Morbi imperdiet enim aliquam, commodo sapien et, tincidunt lacus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tincidunt mi. Nam elementum feugiat quam. Vestibulum blandit, tortor ut lacinia elementum, enim nunc ultrices tortor, eget eleifend ex lacus vitae mi. Suspendisse massa leo, molestie ac feugiat eleifend, elementum eu ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed mauris elementum, fermentum nisl quis, luctus arcu. Integer aliquet est eget sagittis mollis. Nullam egestas vestibulum feugiat. Fusce pharetra nibh sed nisi pharetra semper. Integer aliquet velit a fermentum egestas. Mauris id quam ut libero imperdiet egestas a sed velit. Nam porta sit amet augue congue rhoncus. Ut blandit finibus orci a blandit. Aliquam eu vulputate lectus, sed efficitur tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDonec elit tortor, aliquet a dictum quis, placerat sit amet magna. In dictum enim ac odio viverra, ac tristique turpis tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam lorem augue, rhoncus ut varius et, malesuada in eros. Nulla ex quam, rutrum in dapibus id, lobortis eget leo. Suspendisse dignissim turpis in bibendum pulvinar. Etiam imperdiet maximus justo, ut egestas ex cursus quis. Praesent vel eleifend ex, eu tincidunt mauris. Proin vel nulla et tortor iaculis ornare a a nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eleifend est quis ante viverra, vitae tempus lectus pharetra. Nullam turpis felis, blandit vehicula enim ac, sagittis fringilla sem. Donec pellentesque lacus laoreet libero efficitur, vel imperdiet diam iaculis. Praesent iaculis elementum enim nec convallis.\n\nDonec id dui posuere, egestas magna vitae, efficitur ligula. Morbi ultrices scelerisque velit id ullamcorper. Nunc mollis, ligula at rhoncus gravida, augue diam sagittis mi, id porttitor magna nunc et est. Phasellus eu enim et lectus auctor dignissim. Morbi augue dolor, fringilla nec laoreet sit amet, tincidunt ac mauris. Vestibulum congue arcu in nunc laoreet, gravida fringilla enim feugiat. Vestibulum sit amet sapien placerat, varius nisl vitae, facilisis nibh. Donec posuere cursus nibh vitae suscipit. Mauris eleifend venenatis feugiat.\n\nMorbi lobortis tristique egestas. Phasellus commodo ac eros et scelerisque. Nulla viverra orci ut elit scelerisque, eget fermentum augue luctus. Integer laoreet, tortor vel ultricies pellentesque, quam arcu condimentum ex, quis efficitur elit mi sit amet felis. Curabitur rhoncus dictum convallis. In hac habitasse platea dictumst. Proin laoreet mi nec nunc venenatis auctor.\n\nDuis nec egestas ante. Mauris pulvinar porttitor erat, non sodales mi. Pellentesque dapibus metus in odio aliquet, vitae feugiat tortor rhoncus. Donec tristique, mi vel eleifend interdum, nibh justo aliquet nisl, sit amet sagittis libero ipsum a est. Duis egestas ut orci sed vehicula. In sed elit sit amet augue dignissim vulputate eget at nunc. Nulla ut urna ac turpis venenatis scelerisque id in lorem. Sed interdum sapien sapien, at pellentesque dolor dictum vitae. Suspendisse nec quam non turpis rhoncus laoreet commodo in magna. Nulla aliquam velit laoreet sapien rutrum, nec aliquam tortor sagittis. Vivamus facilisis tellus vitae consectetur vulputate. Nunc porta eu purus congue viverra. Donec a tempus enim. Morbi a tempor velit, vel faucibus massa.\n\nMaecenas fermentum vitae nunc in convallis. Nulla in finibus purus. Nullam a lorem a augue dictum condimentum nec vel quam. Vestibulum et auctor est. Vestibulum volutpat blandit tellus a dictum. In id suscipit lorem. Nunc metus magna, eleifend sit amet varius a, tempus volutpat massa. Sed ut arcu vel lectus cursus porta. Sed facilisis, ante nec suscipit molestie, turpis justo sagittis lacus, et iaculis magna orci a massa. Duis mollis convallis magna, eget imperdiet orci blandit vitae. Aenean sollicitudin maximus est, in condimentum ex mattis quis. Etiam at urna iaculis, mattis orci vitae, interdum odio. Aenean quis enim urna. Praesent gravida libero ac lorem ultricies, at sodales nulla tristique. Duis ornare non mi ut mattis. Vivamus at tristique elit, at dapibus nisl.\n\nNulla ut lectus lorem. Curabitur sed ligula consectetur eros interdum ullamcorper. Cras non pretium ipsum. Sed cursus tempor justo, eget lobortis leo consequat dapibus. Sed ut augue in ex fringilla ultrices. Nullam eget ultricies velit, quis venenatis lacus. Maecenas diam enim, vulputate a nisi id, laoreet sodales enim. Sed ultricies tortor ligula, et accumsan enim porta ac. Nam sit amet consectetur mauris. Suspendisse aliquet massa id neque elementum ullamcorper.\n\nDonec pellentesque enim ut velit fermentum fringilla. Morbi iaculis tellus a condimentum sollicitudin. Nullam in sapien eget metus fermentum tempus. Duis nulla lectus, blandit vitae imperdiet a, pharetra sit amet nisi. Mauris et quam est. Sed aliquet massa consequat, volutpat eros varius, egestas urna. Sed dignissim fermentum pulvinar. Morbi mi libero, vulputate et finibus at, eleifend ut dolor. Suspendisse urna urna, porta sed varius sit amet, tincidunt in sapien. Vivamus vel lobortis elit. Proin convallis justo metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pharetra ipsum in nunc pharetra, elementum sollicitudin lorem scelerisque. Ut quis bibendum tortor. Sed luctus ultricies ante ac feugiat. Nam dolor mi, lacinia in ipsum et, sollicitudin viverra sem.\n\nAenean et ex nulla. Nullam ligula enim, varius a nibh sed, ornare consequat felis. Curabitur venenatis in nisi scelerisque condimentum. Praesent molestie viverra dapibus. Nullam commodo massa tellus, vel auctor urna sodales eget. Integer nec leo viverra, maximus quam non, maximus enim. Aliquam nisl risus, luctus non interdum ut, efficitur egestas sapien. Curabitur ac ultrices purus. Nam interdum venenatis tortor, congue efficitur nisi venenatis ut. Phasellus pharetra libero vel turpis tristique aliquam. Sed ultricies semper sem, id ullamcorper leo sollicitudin at. Nunc cursus id felis eget molestie. Nullam mattis dapibus lobortis. Etiam ac efficitur libero.\n\nNulla vel commodo lectus. Cras in vehicula magna. Sed et sodales purus, id mollis turpis. Suspendisse molestie lacus in mauris porttitor vestibulum fringilla et nulla. Quisque non turpis non enim egestas egestas. Donec interdum molestie dui, ut imperdiet lorem molestie in. Sed viverra in ipsum non posuere. Donec tincidunt augue eget massa euismod vehicula.\n\nVestibulum sit amet lobortis libero. Sed aliquet imperdiet faucibus. Suspendisse porta massa nec tincidunt malesuada. Proin et pretium ex, quis hendrerit nunc. Donec gravida purus massa, et varius nunc commodo vel. Nunc laoreet mollis nibh, vel sodales velit dapibus laoreet. Vestibulum ornare tincidunt dui, vel viverra sapien consectetur eu. Nam posuere a arcu condimentum molestie.\n\nNullam sed ante non nunc iaculis ultricies. Duis eget urna quis ex vestibulum rutrum. Phasellus eu lacinia enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam neque augue, vulputate in lacus id, maximus ultrices arcu. Cras in aliquet nisi, non vehicula ligula. Aliquam erat volutpat. Vivamus scelerisque tristique velit, vel elementum est pharetra eu. Donec vel leo nec mauris dictum lobortis ac ac purus. Sed quis vehicula justo, non porta lorem. Nullam at accumsan mauris. Vestibulum mollis convallis dui nec egestas. Nam sem mi, efficitur ut semper ut, pellentesque ut metus. Phasellus molestie non sapien eget eleifend. Suspendisse pulvinar pharetra enim ac dignissim. Sed a euismod turpis.\n\nProin fermentum magna eu libero molestie sollicitudin. Vestibulum ultricies orci sed porttitor mattis. Fusce ut orci nisl. Aliquam turpis arcu, fermentum nec ipsum non, tristique euismod est. Phasellus viverra, massa vitae tincidunt vehicula, diam orci ullamcorper sapien, ac hendrerit velit sapien dictum lacus. Ut facilisis risus neque, at tincidunt orci tempor et. Suspendisse gravida nibh sed tincidunt imperdiet. Praesent porta dolor nec nisl mollis molestie. Nunc volutpat, magna sit amet imperdiet viverra, tortor odio accumsan est, nec convallis dui odio a lorem. Nunc semper tincidunt erat, quis efficitur felis pretium ac. Donec et quam at arcu lobortis vestibulum. Fusce imperdiet gravida arcu quis ornare. Vestibulum posuere ornare lobortis. Integer non arcu at sapien dignissim elementum sit amet vitae diam. Morbi accumsan tortor dui, quis aliquet magna varius consectetur. Morbi porttitor felis libero.\n\nQuisque a massa sapien. Nam et libero suscipit est sagittis accumsan vel in elit. Nam non elit non nisl scelerisque consectetur a id nulla. Integer ac auctor nunc, vitae venenatis enim. Quisque faucibus augue purus. Aenean sed risus eu sapien commodo iaculis. Etiam iaculis neque vitae mi feugiat efficitur.\n\nIn hac habitasse platea dictumst. Sed quis egestas arcu, nec convallis libero. Ut eu malesuada elit, nec sodales orci. Aliquam rhoncus nisi orci, sollicitudin rhoncus nunc vestibulum id. Etiam id ornare nisi. Aliquam erat volutpat. Integer vestibulum magna sed ipsum fringilla rutrum. Nam sit amet accumsan felis, at accumsan libero. Ut pharetra enim ipsum, sit amet dignissim felis tristique at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar pretium massa, vel vestibulum sem hendrerit eget. Sed lacus lectus, suscipit eu pellentesque non, vehicula ut justo. Maecenas elementum elit id magna dictum scelerisque. Morbi in massa sit amet felis pellentesque sagittis. Phasellus dictum, mauris nec congue interdum, justo ligula elementum purus, at facilisis lorem nibh eget sem. Sed tincidunt, nisl eu rhoncus semper, nunc urna egestas magna, eget tempor arcu justo a purus.\n\nVivamus congue, felis volutpat iaculis rutrum, tellus enim rutrum ligula, in tincidunt est erat ut nisi. Donec auctor sagittis magna. Aliquam tellus ipsum, aliquam id dolor ut, luctus semper mi. Nam tristique velit id elit venenatis, ac pretium quam euismod. Integer in nisl ut massa ultricies aliquet at et nisl. In condimentum sem non orci posuere, aliquam dictum erat placerat. Etiam quis nisl finibus, venenatis mi quis, dignissim mi. Nunc tincidunt fringilla nunc a tempus. Fusce odio nibh, malesuada at tempor id, facilisis id neque. Aliquam faucibus, neque sed eleifend fermentum, augue urna blandit dui, non rutrum mi dolor nec mauris. Nunc suscipit vel neque non ullamcorper. Vivamus tincidunt feugiat odio, eu eleifend orci dictum feugiat. Nullam vulputate nisi eget erat molestie, quis ullamcorper dui fringilla. Sed gravida orci non orci vestibulum pretium.\n\nSuspendisse suscipit nunc turpis, aliquam varius mauris euismod ut. Etiam vel velit sodales, varius elit vitae, efficitur eros. Vivamus blandit volutpat convallis. Ut nec dignissim tortor. Nam hendrerit dui eu tellus pellentesque sagittis. Aliquam tincidunt arcu ex, et tristique sem porttitor sit amet. Nunc non libero lacus. In in placerat mauris, sit amet condimentum dolor. Vestibulum commodo consectetur nunc, eu aliquam purus consectetur eu.\n\nVivamus eget laoreet purus. Aenean velit tortor, efficitur ac lectus id, varius malesuada justo. Fusce diam nisl, lacinia a tellus ut, finibus varius velit. Aliquam molestie nunc aliquam felis vestibulum, quis dignissim lacus semper. Fusce sed neque auctor, mattis lacus id, aliquam neque. Suspendisse non rhoncus metus, non porttitor est. Vestibulum aliquam mi in lacus hendrerit tempus. Phasellus venenatis mi magna, ac varius urna blandit nec. Donec pellentesque sit amet purus ac porttitor. Aliquam in quam nec nisl pulvinar venenatis. Quisque ipsum turpis, convallis vel ipsum at, molestie dignissim nisl. Fusce a diam sit amet elit mollis posuere et nec neque. In eleifend ligula urna, et pretium elit tristique eget.\n\n';
    return Unit;
  }
  function GGJ19_init$lambda$lambda_0($receiver) {
    $receiver.fill();
    return Unit;
  }
  function GGJ19_init$lambda(this$GGJ19) {
    return function ($receiver) {
      this$GGJ19.mainText_0 = $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$(textArea($receiver, GGJ19_init$lambda$lambda)), GGJ19_init$lambda$lambda_0);
      return Unit;
    };
  }
  function GGJ19_init$lambda_0($receiver) {
    $receiver.fill();
    return Unit;
  }
  GGJ19.$metadata$ = {kind: Kind_CLASS, simpleName: 'GGJ19', interfaces: [NavBindable, StackLayoutContainer]};
  var package$ggj19 = _.ggj19 || (_.ggj19 = {});
  package$ggj19.GGJ19 = GGJ19;
  return _;
});

//# sourceMappingURL=GGJ19Core.js.map
