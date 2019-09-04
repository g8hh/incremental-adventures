/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Armor': '护甲',
    'damage': '伤害',
    'Damage': '伤害',
    'Enemy': '敌人',
    'Level': '等级',
    'experience': '经验',
    'Floor': '层',
    'HP': '生命值',
    'Heroes': '英雄',
    'died': '死去了',
    'Battlefield': '战场',
    'attacked': '攻击',
    '- Experience': '- 经验',
    '- Highest Floor': '- 最高层',
    ', awarding you with': ', 奖励你',
    'Prestige': '声望',
    'Ranger': '游侠',
    'You\'ve progressed to floor': '你的进度达到层 ',
    'for': '造成',
    'Level up!': '升级了！',
    'You are now level': '你现在等级是 ',
    'Healing': '治疗',
    'Select Hero Stats': '选择英雄属性',
    'Start game': '开始游戏',
    'Stats used': '剩余点数',
    'You can freely change your team at any time. Your floor will be reset to 1, but no worries, your level will remain the same!': '您可以随时自由更改您的团队。 你的楼层将被重置为1，但不用担心，你的等级将保持不变！',
    'You\'ve respawned at floor': '你已经重生在层 ',
    'Warrior': '战士',
    'Changing your team resets your gamefloor back to 1. But no worries, your level will remain the same! Are you sure you want to change your team?': '改变你的团队将你的游戏层数重置为1.但不用担心，你的等级将保持不变！ 你确定要改变你的团队吗？',
    'base hero stat point': '基础英雄属性点',
    'by clearing this floor!': '通过清除这个楼层！',
    'Cleric': '牧师',
    'You unlocked a new': '你解锁了一个新的',
    'You\'ve unlocked another hero by reaching this floor!': '你已经解锁了另一个英雄在这一层！',
    'Paladin': '圣骑士',
    'healed': '治疗',
    'health': '生命值',
    'Cost': '成本',
    'Cost: 1 point': '成本：1点数',
    'Experience': '经验',
    'Gameplay Unlocks': '游戏解锁',
    'Increase battle speed by': '提高战斗速度',
    'Max Health': '生命值上限',
    'point': '点数',
    'points': '点数',
    'Prestige Layer': '声望层级',
    'prestige points': '声望点',
    'Respawn at (floor-10), instead of': '重生在（10层），而不是',
    'Stats upgrades': '属性升级',
    'Unlock another hero': '解锁另一个英雄',
    'Unlocked': '已解锁',
    'You currently have': '你当前有',
    'Prestige points spent on stats upgrades still count towards your prestige points for the next prestige layer.': '花在属性升级上的声望点仍然计入下一个声望层的声望点。',
    'Respawn at (floor-10), instead of 1*': '重生在（层-10），而不是1 *',
    '*The respawn improvement only works for respawns after dead, it won\'t trigger when prestiging or reskilling. Read as current floor minus amount. It is relative to your current floor.': '*重生后的改进仅适用于死后的重生，并且在声望或重新训练时不会触发。 读为当前楼层减去金额。 它与您当前的楼层有关。',
    'Auto-buyers automatically upgrade your stat upgrades for the previous prestige. They also automatically trigger a prestige when this earns get enough points to buy an upgrade!': '自动购买者会自动升级您之前声望的统计升级。 当获得足够的积分购买升级时，他们也会自动触发声望！',
    'AutoBuyers': '自动购买者',
    '- Next unlock at Floor': '- 下次解锁在层',
    '- Progress to Prestige point': '- 声望点进度',
    '- Progress to Prestige layer 2 point': '- 声望层2点进度',
    '- Progress to Prestige layer': '- 声望层进度',
    'How do I play?': '我应该怎么玩？',
    'Info': '信息',
    'Is there more content after prestige?': '声望后有更多内容吗？',
    'When do I unlock things?': '我什么时候解锁东西？',
    'Who told you there is one? No one should know this yet!': '谁告诉你有一个？ 应该没有人知道这一点！',
    'What is the highest prestige layer?': '什么是最高声望层？',
    'Simply create your heroes and watch them fight, progress, level up and unlock new options!': '只需创建你的英雄，看着他们战斗，进步，升级和解锁新选项！',
    'When can I prestige and what does that mean?': '我什么时候可以声望，这意味着什么？',
    'So will there be more content?': '那么会有更多内容吗？',
    'You unlock stats points as well as new heroes by reaching certain floors. The top menu shows you the floor at which you unlock something new.': '您可以通过到达某些楼层来解锁统计点以及新英雄。 顶部菜单显示您解锁新内容的楼层。',
    'Honestly, I did not expect the game to be received as well as it was. But yes, definitely! I have some idea\'s but can\'t make any promises as to what will be added or when. But your reactions, feedback and suggestions have definitely motivated me to take Incremental Adventures to a level I didn\'t expect it to go! For that, I sincerely thank you!': '老实说，我没想到游戏会被收到。 但是，肯定！ 我有一些想法，但不能对将要添加或何时添加的内容做出任何承诺。 但是你的反应，反馈和建议肯定促使我将渐强冒险提升到我没想到的水平！ 为此，我真诚地感谢你！',
    'Yes. There are more layers to prestige. They consume all of your previous prestige points, as well as points spend on stats upgrades. This will set you back a bit, but allow you to reach even higher numbers when you proceed.': '是。 有更多的层次要声望。 他们会消耗您之前的所有声望积分，以及积分升级的积分。 这会让你退缩一点，但是当你继续时，你可以让你达到更高的数字。',
    'Your first prestige will be unlocked when your team reaches level 100. You can reset your level to acquire "prestige point(s)". These can be spend on a variety of upgrade that improve your next run!': '当您的团队达到100级时，您的第一个声望将被解锁。您可以重置您的等级以获得“声望点”。 这些可以用于各种升级，以改善您的下一次运行！',
    'Auto-prestige triggered by your Prestige Layer 1 Armor auto-buyer! (now': '自动声望触发根据您的声望层1护甲自动购买者!(现在',
    'Auto-prestige triggered by your Prestige Layer 1 Damage auto-buyer! (now': '自动声望触发根据您的声望层1伤害自动购买者!(现在',
    'Dark': '黑夜',
    'Import Save': '导入存档',
    'Light': '白天',
    'Options': '选项',
    'Your save code (click on it to copy to clipboard': '您的存档代码（单击它以复制到剪贴板',
    'Theme': '主题',
    '**The skip floor improvement skips the next x floor(s) when your teams damage is high enough above the total enemy health.': '**当你的团队伤害高于敌人的总体生命值时，跳过楼层的提升会跳过下一个x楼层。',
    'Base multipliers work as soon as you\'ve prestiged once': '一旦你声望一次，基数倍数就会起作用',
    'Auto-buyers automatically upgrade your stat upgrades for the previous prestige. They also automatically trigger a prestige when your team dies and this earns get enough points to buy an upgrade!': '自动购买者会自动升级您之前声望的统计升级。 当你的团队死亡时，他们也会自动触发声望，这样可以获得足够的积分来购买升级！',
    'Disabled': '禁用',
    'Enabled': '启用',
    'Why do I gain prestige points so slowly': '为什么我获得声望点这么慢',
    'Try spending more prestige point in the current layer, as well as the previous layer(s). The amount gained improves over the amount spent on every layer.': '尝试在当前图层以及之前的图层中花费更多的声望点。 获得的金额比每层花费的金额有所改善。',
    ' - Experience': ' - 经验',
    'Wipe Save': '清除存档',
    'Please select the stats for your first hero. Don\'t worry, you can change this at any time!': '请为您的第一个英雄选择属性。 别担心，您可以随时更改！',
    'I have six heroes, why didn\'t I get a seventh?': '我有六个英雄，为什么我没有得到第七个？',
    'Six heroes is the limit, or the game would get too slow later on. However, after your sixth hero, your stats are now multiplied instead of receiving another hero. Meaning if you would have 7, your heroes now have 7/6 power, or 117%. This keeps increasing and is yet another multiplier!': '六个英雄是极限，或者游戏后来会变得太慢。 然而，在你的第六个英雄之后，你的统计数据现在成倍增加而不是接收另一个英雄。 意思是如果你有7，你的英雄现在有7/6的力量，或117％。 这不断增加，是另一个倍增器！',
    'Split only means it only buys all enabled buyers at once': '仅拆分意味着它只会立即购买所有已启用的购买者',
    'Split or exp means the only exception to buy single is for experience': '拆分或经验意味着购买单一的唯一的例外是经验',
    'Split or singles means - it splits when it can, but buys single stats if the first option wasn\'t an option': '拆分或单打表示 - 它可以拆分，但如果第一个选项不是选项，则购买单个统计数据',
    'This is the minimal required amount to buy an upgrade, this goes for manual as well as prestige. For manual this mean you can only click the button for x1.1 (or your number), for AutoBuyer this means they\'ll wait before buying the given layer until the upgrade is atleast that big (x1.1 or your configuration).': '这是购买升级所需的最低金额，这适用于手动和声望。 对于手动，这意味着您只能单击x1.1（或您的号码）的按钮，对于自动购买者，这意味着他们将在购买给定层之前等待，直到升级至少那么大（x1.1或您的配置）。',
    'What do the AutoBuyer strategies mean?': '自动购买者策略意味着什么？',
    'What do the minimal buy multipliers mean?': '最小购买乘数是什么意思？',
    'Why do I gain prestige points so slowly?': '为什么我这么慢地获得声望点？',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^Prestige for (\d+) point$/, '声望 $1 点'],
    [/^Prestige for (\d+) points$/, '声望 $1 点'],
    [/^Layer (\d+) armor$/, '层 $1 护甲'],
    [/^Layer (\d+) damage$/, '层 $1 伤害'],
    [/^Layer (\d+) experience$/, '层 $1 经验'],
    [/^Layer (\d+) healing$/, '层 $1 治疗'],
    [/^Layer (\d+) max health$/, '层 $1 生命上限'],
    [/^Cost: (\d+) points$/, '成本： $1 点'],
    [/^Skip up to (\d+) floor\(s\)\*\*$/, '最多跳过$1层\*\*'],
    [/^Respawn at \(floor\-(\d+)\), instead of \(floor\-(\d+)\)\*$/, '在\(层\-$1\)重生，而不是\(层\-$2\)\*'],
    [/^Auto-prestige triggered by your Prestige Layer (\d+) Experience auto-buyer! \(now$/, '自动声望触发根据您的声望层 $1 经验自动购买者!\(现在'],
    [/^Auto-prestige triggered by your Prestige Layer (\d+) Armor auto-buyer! \(x(\d+) >$/, '自动声望触发根据您的声望层 $1 护甲自动购买者!\(x$1 >'],
    [/^Auto-prestige triggered by your Prestige Layer (\d+) Experience auto-buyer! \(x(.+) >$/, '自动声望触发根据您的声望层 $1 经验自动购买者!\(x$1 >'],
    [/^- Progress to Prestige layer (\d+) point (.+)$/, '- 进度距离到达声望层$1 点数$2 '],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);
