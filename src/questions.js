const questions= [
		{
			"QuestionId": 1,
			"QuestionName": "တစ်ပတ်စာကံကြမ္မာ",
			"QuestionDesp": "!!!တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးချယ်ပြီး ထိုရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\nPictures from Pinterest\nထုံးစံအတိုင်း တစ်ပတ်စာဟောစာတမ်းလေးကို မြင်သလောက် General ရေးထားတာမို့လို့ မတော်တဆလွဲချော်မှုရှိခဲ့သော် Admin ကိုနားလည်ခွင့်လွှတ်ပေးဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 2,
			"QuestionName": "ကိုယ့်အကြောင်းအများဆုံးဘာတွေပြောနေတတ်ကြလဲ'🗣️",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာရွေးချယ်၍ထိုရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\nCard လေးကိုင်နေရရင်စိတ်ညစ်တာတစ်ဝက်ပျောက်လို့ ဒီနေ့ Pile 2 ခုဆက်တိုက်တင်ဖြစ်သွားပါတယ်\nGeneral မြင်သလောက်ကြားရသလောက်လေးရေးထားတာမို့လို့မတော်တဆလွဲချော်မှုရှိခဲ့သော်၊ ဖတ်ရတာမကြိုက်မနှစ်သက်အဆင်မပြေတာရှိခဲ့သော် Admin ကိုနားလည်ခွင့်လွှတ်ပေးကြဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 3,
			"QuestionName": "ဘဝတစ်လျှောက်လုံးမှာဘယ်လိုလူမျိုးကိုအများဆုံးထိပ်တိုက်ရင်ဆိုင်ဖို့ကံပါသလဲ'👤",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးချယ်၍ထိုရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပါ‼️\nဒီနေ့ကတော့ ကိုယ်ကြုံနေရတဲ့လူပေါင်းများစွာထဲက ကိုယ့်အနေနဲ့အမြဲလိုလိုသိသိသာသာမြင်တွေ့ဆက်ဆံနေရတဲ့လူတစ်မျိုးကိုဖော်ပြထားတာဖြစ်ပါတယ်\nထုံးစံအတိုင်း General ဖြစ်တဲ့အတွက် မြင်သလောက်ကြိုးစားရေးထားတာမို့ ဖတ်ရတာအဆင်မပြေတာရှိခဲ့သော်၊ မတော်တဆလွဲချော်မှုရှိခဲ့သော် Admin ကိုနားလည်ခွင့်လွှတ်ပေးကြဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 4,
			"QuestionName": "Ghost သွားတဲ့သူက ကိုယ့်အပေါ်ဘယ်လိုသဘောထားခဲ့လဲ",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးချယ်၍ထိုရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\nအများစုသိချင်နေကြမယ့် မေးခွန်းလို့ယူဆမိတာကြောင့် Admin မြင်သလောက်ကြိုးစားပြီး General ရေးထားတာဖြစ်ပါတယ် \nသီးသန့်တစ်ဦးစီကြည့်လိုရင်တော့ 1 Question-1000mmk နဲ့လာရောက်မေးပေးပါနော်\nမတေယ်တဆလွဲချော်တာနဲ့ဖတ်ရတာအဆင်မပြေတာမျိုးရှိခဲ့ရင် Admin ကို နားလည်ခွင့်လွှတ်ပေးကြဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 5,
			"QuestionName": "အချစ်ရေးအတွက်သင်ကြားဖို့လိုနေတဲ့ Message'",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာ သေချာအာရုံစိုက်ရွေးချယ်၍ထိုရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\nဒီနေ့ဘာတင်ရမလဲ ဘာတင်ရမလဲဆိုပြီး အိပ်ချင်မူးတူးနဲ့အကြံအိုက်နေတုန်း Admin ကိုယ်တိုင်လည်းသိဖို့လိုနေတာလေးတွေးမိသွားလို့ ခေါင်းစဉ်လေးလုပ်ပြီး ကိုယ့် Client တွေပါတူတူကြည့်ရအောင်တင်လိုက်ရပါတယ်\nGeneral မြင်သလောက်ကြိုးစားရေးထားတာမို့လို့ မတော်တဆလွဲချော်တာရှိခဲ့သော်နားလည်ခွင့်လွှတ်ပေးဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 6,
			"QuestionName": "ကိုယ်နဲ့ဖူးစာပါတဲ့လူအကြောင်",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးချယ်ပြီး ရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\nပုံလှလှလေးတွေအမြဲကြုံရင်ကြုံသလိုလာလာပေးကြတဲ့ဘေဘီများ ကျေးဇူးပါ\nWild Unknown လေးတွေမကိုင်ရတာကြာလို့ သေချာလေးမြင်သလောက် General ကိုကြိုးစားရေးထားတာဖြစ်တဲ့အတွက် ဖတ်ရတာအဆင်မပြေတာမျိုးရှိခဲ့သော် Admin ကိုနားလည်ပေးဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 7,
			"QuestionName": "တဖက်လူရဲ့အဖြစ်နိုင်ဆုံးလက်ရှိအခြေအနေ'",
			"QuestionDesp": "💡Seperation/Breakup/No Contact များအတွက်အဓိကရည်ရွယ်ပါတယ်\n‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးချယ်၍ထိုရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\nပုံလေးတွေအတွက်အမြဲကျေးဇူးတင်ပါတယ် ဘေဘီတို့\nAdmin အတွက်ကြည့်ရင်း Client တွေပါသိချင်မလားလို့ General မြင်သလောက်လေးရေးထားပါတယ်\nဟောချက်ကို 50%သာအတည်ယူပေးပါ \nမတော်တဆလွဲချော်မှုနဲ့ ဖတ်ရတာအဆင်မပြေဖြစ်ခဲ့သော် Admin ကိုနားလည်ခွင့်လွှတ်ပေးကြဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 8,
			"QuestionName": "🪧ဆက်စောင့်နေသင့်လား၊ Move Onသင့်လား🪧",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးချယ်၍၎င်းရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\nPictures source from Pinterest\nAdmin ဒီ ခေါင်းစဉ်မတင်ဖူးဘူးထင်တယ် \nလက်ရှိ Admin ကိုယ်တိုင်လည်း ဒီSituationထဲရောက်နေတာမို့လို့ ကိုယ့် Client တွေထဲလည်း Push တစ်ခုခုလိုနေတယ်ခံစားရရင်ရွေးကြည့်ပါနော်\nAdmin ကတော့ Move On ဖို့ရွေးပြီး ကြိုးစားMove On နေပါတယ် \nထုံးစံအတိုင်း General မြင်သလောက်​ကြိုးစားရေးထားတာမို့လို့ စိတ်ထဲမနှစ်သက်တာနဲ့လွဲချော်မှုလေးမတော်တဆရှိခဲ့သော် Admin ကိုနားလည်ခွင့်လွှတ်ပေးကြဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 9,
			"QuestionName": "ကိုယ့်ကိုဘာကြောင့်လူသိများကြတာလဲ'(Pick for Fun)",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးချယ်ပြီး ထိုရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\nပုံလေးတွေအတွက်ကျေးဇူးပါ ဘေဘီ\nကိုယ့် Claude Monet နဲ့ Impressionist cardsတွေမကိုင်တာတော်တော်ကြာပြီမို့လို့ ပေါ့ပေါ့ပါးပါးလေးရွေးလို့ရတာလေးကိုပဲ General မြင်သလောက်လေးရေးလိုက်ရပါတယ်\nမတော်တဆလွဲချော်တာလေးနဲ့ ဖတ်လို့အဆင်မပြေတာရှိခဲ့သော် Admin ကိုနားလည်ခွင့်လွှတ်ပေးကြဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 10,
			"QuestionName": "သင်နဲ့သင့်နောက်တွေ့လာမယ့်လက်တွဲဖော်အခြေအနေ'(Pick for Fun)",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာရွေးချယ်ပြီးထိုရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\nပုံလေးတွေအတွက်ကျေးဇူးပါ သမီးတို့\nဒီနေ့ Admin Energy ကတော့ မငြိမ်ပါ \nခဏနေပျော်လိုက် ခဏနေငိုချင်လာလိုက် ခဏနေငြိမ်လိုက်နဲ့ဖြစ်နေလို့ Pick For Fun အနေနဲ့ပဲ မြင်သလောက် General လေးကြိုးစားရေးပြီးတင်လိုက်ပါတယ်\nမတော်တဆလွဲချော်တာနဲ့ဖတ်ရှုရတာအဆင်မပြေတာရှိခဲ့သော် Admin ကိုနားလည်ခွင့်လွှတ်ပေးကြဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 11,
			"QuestionName": "တစ်ချိန်က ကိုယ့် Imaginary Friend'(Dark Pile)",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးချယ်ပြီးထိုရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\n💡ငယ်ငယ်က ကိုယ်ပဲမြင်ရပြီးသိပြီးသူများမသိတဲ့ စိတ်ကူးယဉ်သူငယ်ချင်း(Imaginary Friend)တွေရှိရင်ဖတ်လို့ရပါပြီ 💡\nPicture Credits go to Pinterest\nနေမကောင်းမဖြစ်ခင်တည်းကဒီPileရေးမယ်ဆိုပြီး မရေးဖြစ်လိုက်တာ အခုမှရေးဖြစ်ပါတယ် \nEnergy အလစ်တဲလေးအဆင်မပြေသေးပေမဲ့ကြိုးစားပြီးမြင်သလောက်ခံစားရသလောက်ကို General ရေးထားပေးတာမို့လို့ မတော်တဆလွဲချော်မှုရှိတာမျိုး၊ဖတ်လို့အဆင်မပြေတာမျိုးရှိရင်ခွင့်လွှတ်ပါ"
		},
		{
			"QuestionId": 12,
			"QuestionName": "🩶'Crush/RS/Situationship/Ex ဆက်ဆံရေးတွေမှာ ရှေ့ဆက်တိုးရင်ဘာဆက်ဖြစ်မလဲ'🩶",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးပြီး ထိုရွေးထားသောပုံအောက်မှဟောစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\nပုံလေးတွေအမြဲလာလာပေးတဲ့အတွက်ကျေးဇူးပါ သမီး\nထုံးစံအတိုင်းမြင်သလောက်ကို ကြိုးစားပြီး General ရေးထားတာဖြစ်တဲ့အတွက် မဆိုစလောက်လွဲချော်မှုရှိနိုင်တာကြောင့် နားလည်းခွင့်လွှတ်ပေးကြဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 13,
			"QuestionName": "ကိုယ့်ဆီရုတ်တရက်ရောက်လာနိုင်တာ'🃏(Cartomancy)(Timeless)",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးချယ်ပြီး ထိုရွေးချယ်ထားသောပုံအောက်မှ ဟောစာတမ်းတစ်ခုတည်းသာဖတ်ပေးပါ‼️\n‼️ကိုယ်ရွေးထားတာဖတ်ပြီးတာနဲ့ချက်ချင်းရပ်ပါ‼️\nCartomancy နဲ့ Karma card မကိုင်တာကြာပြီမို့လို့ ဒီနေ့ Cartomancy ပြန်ကိုင်ကြည့်ထားပါတယ်\nမြင်တာကိုမြင်တဲ့အတိုင်း ဒဲ့ရေးချထားတာကြောင့် ဖတ်ရတာမတေယ်တဆလွဲချော်တာနဲ့အဆင်မပြေတာရှိခဲ့သော်နားလည်ခွင့်လွှတ်ပေးကြဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 14,
			"QuestionName": "ကိုယ်နဲ့အဆက်အသွယ်ပြတ်နေသူဘာဖြစ်နေနိုင်သလဲ'",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးပြီး ထိုရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းကိုသာဖတ်ပေးပါ‼️\nပုံလေးတွေအတွက် Thx kiddo\nအိပ်ခါနီးမှ ရေးချင်စိတ်လေးဖြစ်လာလို့ Short Prediction လေးအနေနဲ့မြင်သလောက် General လေးရေးထားပါတယ်\nမတော်တဆလွဲချော်မှုရှိခဲ့သော်နားလည်ခွင့်လွှတ်ပေးကြဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		},
		{
			"QuestionId": 15,
			"QuestionName": "သင်နဲ့ပတ်သက်နေတဲ့သူတွေထဲကတစ်ဦးရဲ့ Obvious Hidden Behavior'",
			"QuestionDesp": "‼️တစ်ပုံတည်းသာသေချာအာရုံစိုက်ရွေးချယ်ပြီး ရွေးချယ်ထားသောပုံအောက်မှစာတစ်ခုတည်းသာဖတ်ပေးပါ‼️\n-ငါနဲ့Adminရင်းနှီးလို့ ငါ၂ ခုရွေးလည်းမဘမ်းလောက်ပါဘူးဆိုတဲ့သူတွေလည်းကံကောင်းပါစေ\nI believe these pictures have original artists even tho my kids saw it on Pinterest & sent me for pile. Thanks kiddo and credit to original artists.\nဒီနေ့Pile ရေးရတာ Energy ကမောက်ကမဖြစ်နေလို့ ဖတ်ရတာအဆင်မပြေတာနဲ့ လွဲချော်တာရှိခဲ့သော်နားလည်ခွင့်လွှတ်ပေးဖို့မေတ္တာရပ်ခံအပ်ပါတယ်ရှင်"
		}
	]

    export default questions