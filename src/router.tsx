import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@src/pages/home-page/home.page'
import BoardPage from '@src/pages/board-page/board.page'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/game',
        element: <BoardPage />,
    },
])

export default router
