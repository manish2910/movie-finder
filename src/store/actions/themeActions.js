import { CHANGE_THEME } from '../../types/types';

const changeTheme = theme => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}
// eslint-disable-next-line
export default {
    changeTheme
}