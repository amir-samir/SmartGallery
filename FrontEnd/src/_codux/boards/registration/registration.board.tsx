import { createBoard } from '@wixc3/react-board';
import { Registration } from '../../../components/registration/registration';

export default createBoard({
    name: 'Registration',
    Board: () => <Registration />,
    isSnippet: true,