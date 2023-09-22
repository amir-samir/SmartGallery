import { createBoard } from '@wixc3/react-board';
import { OpeningSite } from '../../../components/opening-site/opening-site';

export default createBoard({
    name: 'OpeningSite',
    Board: () => <OpeningSite />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768
    }
});
