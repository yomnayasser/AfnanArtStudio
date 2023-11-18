import {registerSheet} from 'react-native-actions-sheet';
import BookSessionSheet from './BookSessionSheet/BookSessionSheet';
import DeleteSessionSheet from './DeleteSessionSheet/DeleteSessionSheet';
import EnrolledCoursesFilterSheet from './EnrolledCoursesFilterSheet/EnrolledCoursesFilterSheet';

registerSheet('BookSessionSheet', BookSessionSheet);
registerSheet('DeleteSessionSheet', DeleteSessionSheet);
registerSheet('EnrolledCoursesFilterSheet', EnrolledCoursesFilterSheet);

export {};
