import { useAuth } from '../Context/AuthContext'

/**
 * Custom hook that derives the role flags for the currently
 * authenticated user.  This wrapper ensures that `useAuth` is
 * called inside a valid React hook context as required by the
 * React Hooks rules.
 */
export const useUserRole = () => {
  const { user } = useAuth()

  return {
    isUser: user && user.role === 'USER',
    isEditor: user && user.role === 'EDITOR',
    isMuseum: user && user.role === 'MUSEUM',
    isAdmin: user && user.role === 'ADMIN',
    isCreator: user && user.role === 'CREATOR',
    isAuthor: user && user.role === 'AUTHOR',
    isExhibition: user && user.role === 'EXHIBITION',
  }
}

const allImages = [
	'/Img/gallery/1.webp',
	'/Img/gallery/2.webp',
	'/Img/gallery/3.webp',
	'/Img/gallery/4.webp',
	'/Img/gallery/5.webp',
	'/Img/gallery/6.webp',
	'/Img/gallery/7.webp',
	'/Img/gallery/8.webp',
	'/Img/gallery/9.webp',
	'/Img/gallery/10.webp',
	'/Img/gallery/11.webp',
	'/Img/gallery/12.webp',
	'/Img/gallery/13.webp',
	'/Img/gallery/14.webp',
        '/Img/gallery/15.webp',
        // Add more image URLs as needed
]

const ukrainianLetters = [
	'А',
	'Б',
	'В',
	'Г',
	'Ґ',
	'Д',
	'Е',
	'Є',
	'Ж',
	'З',
	'И',
	'І',
	'Ї',
	'Й',
	'К',
	'Л',
	'М',
	'Н',
	'О',
	'П',
	'Р',
	'С',
	'Т',
	'У',
	'Ф',
	'Х',
	'Ц',
	'Ч',
	'Ш',
	'Щ',
	'Ь',
	'Ю',
	'Я',
]

// Define English letters in alphabetical order
const englishLetters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
]
// State to manage images currently displayed
export { allImages, englishLetters, ukrainianLetters }
