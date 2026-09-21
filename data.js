// data.js
//
// DILEMMAS = the main 30 questions.
// BONUS_DILEMMAS = secret extra questions. There's a small chance one of
// these sneaks into a playthrough (see script.js) — small easter egg,
// not something a basic tutorial version would have.
//
// reactionsLeft / reactionsRight = a few lines each, picked at random
// when that side gets clicked. Kept messy on purpose — real reactions
// don't all sound the same length or tone.

const DILEMMAS = [
  {
    left: "Sumakay sa jeepney na sardinas",
    right: "Sumakay sa Grab na sobrang mahal",
    reactionsLeft: ["Ang sikip pero sanay ka na diba", "Nasa loob ka na, wala ka nang magagawa"],
    reactionsRight: ["Ay ang yaman naman", "Sana all may Grab budget"]
  },
  {
    left: "Kainin ang isaw sa kanto",
    right: "Kainin ang betamax sa kanto",
    reactionsLeft: ["Okay lang yan, tibay ng tiyan mo", "Manong isaw ang alam sa'yo"],
    reactionsRight: ["Safe choice", "Hindi ka pa nasusunugan ng puso pero ganito na"]
  },
  {
    left: "Manood ng teleserye buong gabi",
    right: "Mag-binge ng K-drama buong gabi",
    reactionsLeft: ["Ay bakit umiiyak ka na", "Next episode agad, classic"],
    reactionsRight: ["Subtitle speed reader ka na pala", "Oppa nasaan ka na"]
  },
  {
    left: "Sinigang na sobrang asim",
    right: "Sinigang na matabang",
    reactionsLeft: ["Mata mo na lang umiiyak sa asim", "Sarap pero panganib sa ngipin"],
    reactionsRight: ["Parang sabaw lang talaga to", "Walang kalamansi sa buhay mo ha"]
  },
  {
    left: "Videoke ng kapitbahay hanggang alas-dose",
    right: "Walang kuryente buong gabi",
    reactionsLeft: ["My way na naman ba yan", "Sana bukas tapos na"],
    reactionsRight: ["Ang tahimik naman, pero mainit", "Electric fan, we miss you"]
  },
  {
    left: "Traffic sa EDSA ng 2 oras",
    right: "UV Express na sardinas ang sakay",
    reactionsLeft: ["Dalawang episode ka na natapos dyan", "Andami mong naisip habang nakatengga"],
    reactionsRight: ["Kilala mo na yung katabi mo ngayon", "Personal space, sino ba yan"]
  },
  {
    left: "Kanin na malamig",
    right: "Ulam na sobrang anghang",
    reactionsLeft: ["Microwave nasaan ka", "Malamig pero sagot sa gutom"],
    reactionsRight: ["Gatas! tubig! hangin! kahit ano!", "Hero ka sa taas ng Scoville scale"]
  },
  {
    left: "Manalo sa lotto pero bayaran ang utang ng buong barangay",
    right: "Walang utang pero walang panalo",
    reactionsLeft: ["Mayor ka na ba nito", "Salamat daw ang buong subdivision"],
    reactionsRight: ["Ok lang, tahimik na buhay yan", "Walang drama, walang kaso"]
  },
  {
    left: "Walang cellphone signal sa probinsya",
    right: "Walang tubig sa syudad",
    reactionsLeft: ["Di ka na masusuklam sa group chat", "Forced detox, ayos din pala"],
    reactionsRight: ["Timba na naman tayo dito", "Sana may deliba"]
  },
  {
    left: "Kumanta ng videoke, sira ang boses",
    right: "Sumayaw ng TikTok trend sa harap ng pamilya",
    reactionsLeft: ["Confidence talo pitch", "Meme material na yan bukas"],
    reactionsRight: ["Lola clapping in the back", "Camera ready ka na pala talaga"]
  },
  {
    left: "Maligo gamit ang timba at tabo",
    right: "Maligo sa napakalamig na shower",
    reactionsLeft: ["Tunog ng tabo, sound of childhood yan", "Resourceful ka talaga"],
    reactionsRight: ["Sigaw mo naiintindihan ng kapitbahay", "Brave sa umaga ha"]
  },
  {
    left: "Ang Probinsyano marathon",
    right: "Eat Bulaga live sa studio",
    reactionsLeft: ["Ilang season na nga ba yan", "Loyal ka talaga dito"],
    reactionsRight: ["Dabarkads forever", "Sayaw ka rin sa TV mamaya"]
  },
  {
    left: "Balut bago matulog",
    right: "Penoy pagkagising",
    reactionsLeft: ["Lakas ng loob award", "Manong balut, patok lagi"],
    reactionsRight: ["Simple lang, protina lang", "Walang gulo, tulog na"]
  },
  {
    left: "Traysikel na sobrang bilis",
    right: "Maglakad sa ulan na walang payong",
    reactionsLeft: ["Hawak mabuti diyan ha", "Parang roller coaster pero mas mura"],
    reactionsRight: ["Sipon bukas, wag magrereklamo", "Malapit lang naman diba"]
  },
  {
    left: "Manalo sa raffle pero ikaw magluluto para sa fiesta",
    right: "Hindi manalo pero kumakain ka lang",
    reactionsLeft: ["Chief cook ka na ngayon", "Panalo pero pagod, classic"],
    reactionsRight: ["Panauhin lang, pinakamagandang role", "Relax, may nagluto naman"]
  },
  {
    left: "3 hours na commute papuntang school/work",
    right: "15 minutes lang pero paa ang gamit",
    reactionsLeft: ["Natapos mo na yata yung audiobook dyan", "Window seat sana"],
    reactionsRight: ["Steps mo tapos na for the day", "Sipag, need lang talaga"]
  },
  {
    left: "Baon na paulit-ulit isang linggo",
    right: "Walang baon, gutom hanggang uwian",
    reactionsLeft: ["Longganisa gang unite", "Consistent ka lang naman"],
    reactionsRight: ["Budget warrior", "Tiis muna, tapos na to"]
  },
  {
    left: "Grupo mo lahat, ikaw lang gumagawa ng project",
    right: "Ikaw lang mag-isa, walang grupo",
    reactionsLeft: ["Classic, di ka nagulat dyan diba", "Mvp ka pero walang bayad"],
    reactionsRight: ["Walang drama, solo lang talaga", "Introvert dream setup to"]
  },
  {
    left: "Manalo ng videoke contest pero pangit ang boses mo",
    right: "Hindi manalo pero magaling kumanta",
    reactionsLeft: ["Connections talaga panalo dito", "Trophy muna, talent mamaya"],
    reactionsRight: ["Pride mo buo pa rin", "Totoong bituin walang plake"]
  },
  {
    left: "Mag-relocate sa malayong lungsod para sa trabaho",
    right: "Manatili sa probinsya na mababa ang sahod",
    reactionsLeft: ["Bagong buhay, bagong grocery", "Homesick agad sa first week"],
    reactionsRight: ["Malapit sa pamilya, priceless", "Simple lang, sapat na"]
  },
  {
    left: "Kumain ng street food na masarap pero mapanganib",
    right: "Kumain ng carinderia na safe pero plain",
    reactionsLeft: ["Yolo diet approved", "Manong extra po yung sawsawan"],
    reactionsRight: ["Ulam kanin, sigurado", "Boring pero buhay ka pa bukas"]
  },
  {
    left: "Maging close friend ng chismosa",
    right: "Maging close friend ng seryoso",
    reactionsLeft: ["Updated ka lagi, aminin mo na", "Barangay news channel yan"],
    reactionsRight: ["Peaceful, walang drama", "Deep talks lang, walang kalat"]
  },
  {
    left: "Manood ng sine sa sinehan na maingay ang katabi",
    right: "Manood sa bahay pero streaming lang",
    reactionsLeft: ["Popcorn at commentary, combo deal", "Buffer-free pero may kasama"],
    reactionsRight: ["Pause anytime, walang katatawa", "Sariling sinehan, edi wow"]
  },
  {
    left: "Maglakad papuntang paaralan/trabaho kahit malayo",
    right: "Sumakay ng masikip na jeep",
    reactionsLeft: ["Exercise na transpo pa", "Sipag level marathon runner"],
    reactionsRight: ["Kasama mo na buong barangay sa loob", "Personal space, wala"]
  },
  {
    left: "Magdala ng baon kahit nakakahiya sa mga kaklase",
    right: "Kumain sa labas kahit mahal",
    reactionsLeft: ["Practical ka, mas masarap pa nga", "Tupperware warrior tuloy lang"],
    reactionsRight: ["Allowance paalam agad", "Budget status critical"]
  },
  {
    left: "Piliin ang libreng WiFi pero super bagal",
    right: "Bayad na WiFi pero mabilis",
    reactionsLeft: ["Loading pa rin, sabay tayo", "Patience talaga super power mo"],
    reactionsRight: ["Sulit ang load", "Buffer free, blessed ka"]
  },
  {
    left: "Manood ng balita tuwing gabi",
    right: "Manood ng variety show tuwing gabi",
    reactionsLeft: ["Updated sa mundo, solid", "Current events expert ikaw na"],
    reactionsRight: ["Kanta sayaw tawa, package deal", "Stress free na gabi"]
  },
  {
    left: "Maging bida sa school play kahit kinakabahan",
    right: "Manood na lang sa audience",
    reactionsLeft: ["Kinakabahan pero sulit", "Applause mo, deserve"],
    reactionsRight: ["Front row seat, walang pressure", "Support system din importante"]
  },
  {
    left: "Kainin ang leftover ulam kahapon",
    right: "Kainin ang bagong lutong itlog na lang",
    reactionsLeft: ["Walang sayang, reheat gang", "Ulam pa rin naman"],
    reactionsRight: ["Simple lang pero sapat na", "Itlog, forever savior"]
  },
  {
    left: "Magbayad ng utang agad kahit mahirapan",
    right: "Magpaliban ng bayad pero may lakad pa",
    reactionsLeft: ["Malinis budol, walang tatawag sayo", "Peace of mind talaga"],
    reactionsRight: ["Lakad muna, utang mamaya classic", "Konsensya, huwag mag-alala diyan"]
  },
];

// Secret bonus questions. Only a chance to appear once per playthrough —
// see startGame() in script.js for the logic.
const BONUS_DILEMMAS = [
  {
    left: "Mag-refresh ng grades portal kada 5 minuto",
    right: "Hindi mo tingnan hanggang official na announcement",
    reactionsLeft: ["Di ka na natulog dahil dyan diba", "F5 warrior, kilala kita"],
    reactionsRight: ["Matapang ka pala pag ganito", "Sana makatulog ka pa rin"]
  },
  {
    left: "Ma-late sa klase pero may dahilan",
    right: "Maagang pumasok pero wala kang ginawang assignment",
    reactionsLeft: ["May excuse na ready, professional level", "Traffic na naman siguro"],
    reactionsRight: ["Nandito ka lang for attendance", "Panic mode habang naguusap ang prof"]

  },
  {
    left: "Sasali sa debate ni Charlie Kirkk",
    right: "Rene Baterbonia na nag pa swimming lessons sa TikTok",
    reactionsLeft: ["We aReee ChaRliee kirkk, we carry the flameeee", "Debate master ka na pala"],
    reactionsRight: ["MaaaMAAAaaaaaaaaaaaaaaaaaaaaaaaaa", "The og Butuin ng mindanao"]
  },
];
