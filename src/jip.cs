public static int LowestNumberUnsorted(int[] arr)
{
    int lowest  = 0;
    for(int i = 0; i < arr.Length; i++)
    {
        if(arr[i] < arr[lowest]){
            lowest = i;
        }
    }
    return lowest;
}
