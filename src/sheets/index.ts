import {registerSheet} from 'react-native-actions-sheet';
import BookSessionSheet from './BookSessionSheet/BookSessionSheet';
import DeleteSessionSheet from './DeleteSessionSheet/DeleteSessionSheet';

registerSheet('BookSessionSheet', BookSessionSheet);
registerSheet('DeleteSessionSheet', DeleteSessionSheet);

export {};
