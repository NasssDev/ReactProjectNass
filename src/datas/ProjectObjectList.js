import projetMap from '../assets/projetMap.png'
import blogMvc from '../assets/BlogMvc.PNG'
import formContact from '../assets/formContact.PNG'

export const projectObjectList = [
    {
        name: 'Projet map',
        category: 'JavaScript vanilla, Leaflet Library & API.gouv',
        id: '1ed',
        isBestProject: true,
        stack : '(front)',
        cover : projetMap,
        url : 'https://xclzc8.csb.app/'
    },
    {
        name: 'Form contact',
        category: 'Laravel & Bootstrap',
        id: '2ab',
        isBestProject: false,
        stack : '(back)',
        cover: formContact
    },
    {
        name: 'BlogMvc',
        category: 'PHP Natif & template',
        id: '3sd',
        isBestProject: true,
        stack : '(back)',
        cover: blogMvc,
        url: 'https://github.com/NasssDev/BlogMVC'
    }
]