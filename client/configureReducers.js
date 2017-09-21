import {combineReducers} from 'redux'

export default configureReducers = (components) =>
{
    let componentReducers = {};
    if(components && Array.isArray(components) && components.length > 0 )
    {
        const componentsLength = components.length;
        for(let i = 0; i < componentsLength; i++)
        {
            let component = components[i];
            if(component.reducer)
            {
                componentReducers = Object.assign({}, component.reducer)
            }
        }
        return combineReducers(componentReducers);
    }
};