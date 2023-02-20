import {AiFillHome, AiOutlineLike, AiOutlineCompass,AiOutlineFire,AiOutlineSetting,AiOutlineQuestionCircle} from 'react-icons/ai'
import {RiVideoLine} from 'react-icons/ri'
import {BsBroadcast} from 'react-icons/bs'
import {GrGamepad} from 'react-icons/gr'
import {TfiCup} from 'react-icons/tfi'
import {SlFlag} from 'react-icons/sl'
import {MdOutlineSubscriptions, 
    MdOutlineVideoLibrary, 
    MdHistory, 
    MdHistoryToggleOff,
    MdOutlineKeyboardArrowDown,
    MdOutlineMusicNote,
    MdOutlineFeedback,
} from 'react-icons/md'

const dataSide = [
    {
        icon :<AiFillHome className='icon-style'/>,
        name : 'Ana Sayfa'
    },
    {
        icon :< AiOutlineCompass className='icon-style'/>,
        name : 'Shorts'
    },
    {
        icon :<MdOutlineSubscriptions className='icon-style'/>,
        name : 'Abonelikler'
    },
    {
        icon :<MdOutlineVideoLibrary className='icon-style'/>,
        name : 'Kitaplık'
    },
    {
        icon :< MdHistory className='icon-style'/>,
        name : 'Geçmiş'
    },
    {
        icon :< RiVideoLine className='icon-style'/>,
        name : 'Videolarınız'
    },
    {
        icon :< MdHistoryToggleOff className='icon-style'/>,
        name : 'Daha sonra izle'
    },
    {
        icon :< AiOutlineLike className='icon-style'/>,
        name : 'Beğendiğim videolar'
    },
    {
        icon :<MdOutlineKeyboardArrowDown className='icon-style'/>,
        name : 'Daha fazla göster'
    },
    {
        icon :<AiOutlineFire className='icon-style'/>,
        name : 'Trendler'
    },
    {
        icon :<MdOutlineMusicNote className='icon-style'/>,
        name : 'Müzik'
    },
    {
        icon :<BsBroadcast className='icon-style'/>,
        name : 'Canlı'
    },
    {
        icon :<GrGamepad className='icon-style'/>,
        name : 'Oyun'
    },
    {
        icon :<TfiCup className='icon-style'/>,
        name : 'Spor'
    },
    {
        icon :<AiOutlineSetting className='icon-style'/>,
        name : 'Ayarlar'
    },
    {
        icon :<SlFlag className='icon-style'/>,
        name : 'İçerik bildirme geçmişi'
    },
    {
        icon :<AiOutlineQuestionCircle className='icon-style'/>,
        name : 'Yardım'
    },
    {
        icon :<MdOutlineFeedback className='icon-style'/>,
        name : 'Geri Bildirim'
    },
]

export default dataSide