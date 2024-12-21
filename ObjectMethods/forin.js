/**
 * =>for-in is used to access the indices of the array , Object (if it is iterable.)
 * =>for-in provides the indices of array and the  property names in the Object.
 */




let arr=['b','a','c','e','f','g','i'];


for(let kin in arr)
{
    if(arr[kin]=='g')
    {
        console.log(kin);
        
    }
}


