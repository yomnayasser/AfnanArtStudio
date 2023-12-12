import {registerSheet} from 'react-native-actions-sheet';
import BookSessionSheet from './BookSessionSheet/BookSessionSheet';
import DeleteSessionSheet from './DeleteSessionSheet/DeleteSessionSheet';
import EditPersonalInfoSheet from './EditPersonalInfoSheet/EditPersonalInfoSheet';
import EnrolledCoursesSortSheet from './EnrolledCoursesSortSheet/EnrolledCoursesSortSheet';
import EnrolledCoursesFilterSheet from './EnrolledCoursesFilterSheet/EnrolledCoursesFilterSheet';

registerSheet('BookSessionSheet', BookSessionSheet);
registerSheet('DeleteSessionSheet', DeleteSessionSheet);
registerSheet('EditPersonalInfoSheet', EditPersonalInfoSheet);
registerSheet('EnrolledCoursesSortSheet', EnrolledCoursesSortSheet);
registerSheet('EnrolledCoursesFilterSheet', EnrolledCoursesFilterSheet);

export {};
