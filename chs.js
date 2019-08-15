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
    'Paladin': '武士',
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
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);
