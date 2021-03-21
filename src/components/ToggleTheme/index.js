import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  allActions  from '../../store/actions'
import './index.css';
import { Label, Input } from './style'

const ToggleTheme = (props) => {
    const selector = useSelector(state => state.themeReducer);
    const { theme } = selector;
    const [uiTheme, setUiTheme] = useState(theme);
    const dispatch = useDispatch();
    const { themeActions } = allActions;

    const toggleHandler = (e) => {
        let { checked } = e.target;
        setUiTheme(checked);
        if(checked){
            dispatch(themeActions.changeTheme('light'));
        }else{
            dispatch(themeActions.changeTheme('dark'));
        }
    };

    useEffect(() => {
        if(theme === true || theme === 'light'){
            setUiTheme(true)
        }else{
            setUiTheme(false)
        }
    },[theme]);
    console.log(theme, uiTheme);

    return (
        <Label>
            <Input type="checkbox" onChange={toggleHandler} checked={uiTheme}/>
            <span className="slider round"></span>
        </Label>
    )
};

export default ToggleTheme;