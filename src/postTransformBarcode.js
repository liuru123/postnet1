'use strict';

function isInvalidLength(inputPost) {
    if(inputPost.length===5 || inputPost.length===9 || inputPost.length===10)
        return true;
    else
        return false;
}

function isCorrectChar(inputPost)
{
    let result=inputPost.split('-');
    return result[0].length===5 && (result[1].length===4 || result[1]===undefined);

}
function isNumber(inputPost)
{
    for(let item of inputPost)
    {
        if(item!=='-' && item!=='0' && item!=='1' && item!=='2' && item !=='3' && item!=='4' && item!=='5' && item!=='6' && item !=='7' && item!=='8' && item !=='9')
            return false;
    }
    return true;
}
function loadAllItems()
{
    return ['||:::', ':::||',
        '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];

}
function divideArray(inputPost)
{
    let result=[];
    let temp=inputPost.split('');
    temp.forEach(function (input) {
        if(input!=='-')
        {
            result.push(parseInt(input));
        }
    });
    return result;
}

function computeCD(numberArray)
{
    let sum=0;
    let cd=0;
    numberArray.forEach(function (input) {
        sum+=input;
    })
    if(sum%10===0)
    {
        cd=0;
    }
    else
    {
        cd=10-sum%10;
    }
     numberArray.push(cd);
    return numberArray;
}


function matchBarcode(numberArrayCD,items)
{
    let result=[];
    numberArrayCD.forEach(function (item) {
        result.push(items[item])
    });
    return result;
}

function formattedBarcode(stringArray)
{
    let result='|';
    stringArray.forEach(function (string) {
        result+=string;
    })
    result+='|';
    return result;
}

function postTransformBarcode(inputPost)
{
    let info=isInvalidLength(inputPost);
    let infoToo=isCorrectChar(inputPost);
    let info2 = isNumber(inputPost);
    if(info===false || infoToo===false || info2===false)
    {
        return 'the input is error';
    }
    let numberArray=divideArray(inputPost);
    let numberArrayCD=computeCD(numberArray);
    let itemsArray=loadAllItems();
    let stringArray=matchBarcode(numberArrayCD,itemsArray);
    let result=formattedBarcode(stringArray);
    return result;
}