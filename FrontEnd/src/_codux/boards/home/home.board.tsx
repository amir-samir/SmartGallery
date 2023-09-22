import { createBoard } from '@wixc3/react-board';
import { Home } from '../../../components/home/home';

export default createBoard({
    name: 'Home',
    Board: () => <Home />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 714,
        canvasHeight: 1306
    }
});
