const StringUtils = {};
const convertFirstLetterToLowerCaseInvalidErrorMsg = "Invalid parameter : StringUtils.convertFirstLetterToLowerCase() expected a string";

StringUtils.convertFirstLetterToLowerCase = (stringItem) =>
{
    if(typeof(stringItem) !== "string")
    {
        throw new Error(convertFirstLetterToLowerCaseInvalidErrorMsg);
        return;
    }
    let firstLetter = stringItem[0];
    let stringItemWithoutFirstLetter = stringItem.substr(1);

    return `${firstLetter.toLowerCase()}${stringItemWithoutFirstLetter}`;
};

export default StringUtils;