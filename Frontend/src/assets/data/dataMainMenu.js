// Img Dock
import heroChartImg from '../images/docks/heroChart.png';
import storeImg from '../images/docks/store.png';
import backpackImg from '../images/docks/backpack.png';
import guildImg from '../images/docks/guild.png';
import friendImg from '../images/docks/friend.png';
import settingImg from '../images/docks/setting.png';
import messageImg from '../images/docks/message.png';
// Img Event
import eventImg from '../images/event/fire.gif';
import giftImg from '../images/event/gift.png';
// Img Task
import taskImg from '../images/task/task.png';
// Img Player
import avatarImg from '../images/player/user.png';
import frameImg from '../images/player/frame.png';
import rank1Img from '../images/rank/rank2.png';
//Img player List
import avatar1Img from '../images/player/user1.png';
import avatar2Img from '../images/player/user2.png';
import avatar3Img from '../images/player/user3.png';
import avatar4Img from '../images/player/user4.png';
import avatar5Img from '../images/player/user5.png';
import avatar6Img from '../images/player/user6.png';
import avatar7Img from '../images/player/user7.png';


// Data player 

export const PLAYER_DATA = {
    id: 1,
    name: 'Cow Cow',
    avatar: avatarImg,
    frameImg: frameImg,
    rank: rank1Img,
    ranking: 1,
    elo: 1000,
    exp: 98,
    pow: 56,
    caption: null,
}


export const PLAYERLIST_DATA = [
    {
        id: 1,
        name: 'Cow Cow',
        avatar: avatar1Img,
        frameImg: frameImg,
        rank: rank1Img,
        elo: 1000,
        ranking: 1,
        exp: 98,
        pow: 56,
    },
    {
        id: 2,
        name: 'Dark Dark',
        avatar: avatar4Img,
        frameImg: frameImg,
        rank: rank1Img,
        elo: 1000,
        ranking: 12,
        exp: 98,
        pow: 56,
    },
    {
        id: 3,
        name: 'Bum Bum',
        avatar: avatar5Img,
        frameImg: frameImg,
        rank: rank1Img,
        elo: 1000,
        ranking: 18,
        exp: 98,
        pow: 56,
    },
    {
        id: 4,
        name: 'Shut Shut',
        avatar: avatar7Img,
        frameImg: frameImg,
        rank: rank1Img,
        elo: 1000,
        ranking: 7,
        exp: 98,
        pow: 56,
    },
    {
        id: 5,
        name: 'Milk Milk',
        avatar: avatar2Img,
        frameImg: frameImg,
        rank: rank1Img,
        elo: 1000,
        ranking: 7,
        exp: 98,
        pow: 56,
    },
    {
        id: 6,
        name: 'Lion Lion',
        avatar: avatar3Img,
        frameImg: frameImg,
        rank: rank1Img,
        ranking: 8,
        elo: 1000,
        exp: 98,
        pow: 56,
    },
    {
        id: 7,
        name: 'Ohmygod',
        avatar: avatar6Img,
        frameImg: frameImg,
        rank: rank1Img,
        elo: 1000,
        ranking: 128,
        exp: 98,
        pow: 56,
    },
]

// Data task
export const TASK_DATA = [
    {
        title: 'Tasks',
        image: taskImg,
        notification: 1,
    },
]

// Data event
export const EVENT_DATA = [
    {
        title: 'Event',
        image: eventImg,
        notification: undefined,
    },
    {
        title: 'Gift',
        image: giftImg,
        notification: undefined,
    },
    {
        title: 'Rules',
        image: messageImg,
        notification: 12,
    },
]
// Data dock
export const DOCKS_DATA = [
    {
        title: 'Rankings',
        image: heroChartImg,
        notification: undefined,
    },
    {
        title: 'Store',
        image: storeImg,
        notification: undefined,
    },
    {
        title: 'Backpack',
        image: backpackImg,
        notification: undefined,
    },
    {
        title: 'Guild',
        image: guildImg,
        notification: undefined,
    },
    {
        title: 'Friends',
        image: friendImg,
        notification: 22,
    },
    {
        title: 'Setting',
        image: settingImg,
        notification: undefined,
    },
]


// DATA ROOM LIST

export const ROOMS_DATA = [
    {
        id: 123,
        owner: 4,
        member: [
            {
                id: 2,
                name: 'Dark Dark',
                avatar: avatar4Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 12,
                exp: 98,
                pow: 56,
            },
            {
                id: 3,
                name: 'Bum Bum',
                avatar: avatar5Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 18,
                exp: 98,
                pow: 56,
            },
            {
                id: 4,
                name: 'Shut Shut',
                avatar: avatar7Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 7,
                exp: 98,
                pow: 56,
            },
            {
                id: 5,
                name: 'Ohmygod',
                avatar: avatar6Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 128,
                exp: 98,
                pow: 56,
            },
        ],
        max_member: 5,
        get now_member() {
            return this.member.length;
        },
        get full() {
            if (this.now_member === this.max_member) {
                return true;
            }
            return false;
        },
    },
    {
        id: 103,
        owner: 2,
        member: [
            {
                id: 2,
                name: 'Dark Dark',
                avatar: avatar4Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 12,
                exp: 98,
                pow: 56,
            },
            {
                id: 3,
                name: 'Bum Bum',
                avatar: avatar5Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 18,
                exp: 98,
                pow: 56,
            },
            {
                id: 4,
                name: 'Shut Shut',
                avatar: avatar7Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 7,
                exp: 98,
                pow: 56,
            },
        ],
        max_member: 5,
        get now_member() {
            return this.member.length;
        },
        get full() {
            if (this.now_member === this.max_member) {
                return true;
            }
            return false;
        },
    },
    {
        id: 130,
        owner: 3,
        member: [
            {
                id: 2,
                name: 'Dark Dark',
                avatar: avatar4Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 12,
                exp: 98,
                pow: 56,
            },
            {
                id: 3,
                name: 'Bum Bum',
                avatar: avatar5Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 18,
                exp: 98,
                pow: 56,
            },
            {
                id: 4,
                name: 'Shut Shut',
                avatar: avatar7Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 7,
                exp: 98,
                pow: 56,
            },
        ],
        max_member: 5,
        get now_member() {
            return this.member.length;
        },
        get full() {
            if (this.now_member === this.max_member) {
                return true;
            }
            return false;
        },
    },
    {
        id: 131,
        owner: 5,
        member: [
            {
                id: 2,
                name: 'Dark Dark',
                avatar: avatar4Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 12,
                exp: 98,
                pow: 56,
            },
            {
                id: 3,
                name: 'Bum Bum',
                avatar: avatar5Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 18,
                exp: 98,
                pow: 56,
            },
            {
                id: 4,
                name: 'Shut Shut',
                avatar: avatar7Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 7,
                exp: 98,
                pow: 56,
            },
            {
                id: 5,
                name: 'Ohmygod',
                avatar: avatar6Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 128,
                exp: 98,
                pow: 56,
            },
        ],
        max_member: 5,
        get now_member() {
            return this.member.length;
        },
        get full() {
            if (this.now_member === this.max_member) {
                return true;
            }
            return false;
        },
    },
    {
        id: 132,
        owner: 2,
        member: [
            {
                id: 2,
                name: 'Dark Dark',
                avatar: avatar4Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 12,
                exp: 98,
                pow: 56,
            },
            {
                id: 3,
                name: 'Bum Bum',
                avatar: avatar5Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 18,
                exp: 98,
                pow: 56,
            },
        ],
        max_member: 5,
        get now_member() {
            return this.member.length;
        },
        get full() {
            if (this.now_member === this.max_member) {
                return true;
            }
            return false;
        },
    },
    {
        id: 135,
        owner: 3,
        member: [
            {
                id: 2,
                name: 'Dark Dark',
                avatar: avatar4Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 12,
                exp: 98,
                pow: 56,
            },
            {
                id: 3,
                name: 'Shut Shut',
                avatar: avatar7Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 7,
                exp: 98,
                pow: 56,
            },
        ],
        max_member: 5,
        get now_member() {
            return this.member.length;
        },
        get full() {
            if (this.now_member === this.max_member) {
                return true;
            }
            return false;
        },
    },
    {
        id: 143,
        owner: 3,
        member: [
            {
                id: 2,
                name: 'Bum Bum',
                avatar: avatar5Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 18,
                exp: 98,
                pow: 56,
            },
            {
                id: 3,
                name: 'Shut Shut',
                avatar: avatar7Img,
                frameImg: frameImg,
                rank: rank1Img,
                elo: 1000,
                ranking: 7,
                exp: 98,
                pow: 56,
            },
        ],
        max_member: 5,
        get now_member() {
            return this.member.length;
        },
        get full() {
            if (this.now_member === this.max_member) {
                return true;
            }
            return false;
        },
    },
]
