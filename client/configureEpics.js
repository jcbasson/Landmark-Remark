import { combineEpics } from 'redux-observable';


export default configureEpics = (components) =>
{
    let componentEpics = [];
    if(components && Array.isArray(components) && components.length > 0 )
    {
        const componentsLength = components.length;
        for(let i = 0; i < componentsLength; i++)
        {
            let component = components[i];
            if(component.epics && Array.isArray(components.epics))
            {
                componentEpics.push(...component.epics)
            }
        }
        return combineEpics(componentEpics);
    }
};
