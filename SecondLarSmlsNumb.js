function printsecondlargest(arr, arr_size) {
        let i, first, second;

        if (arr_size < 2) {
            console.log(" Invalid Input ");
            return;
        }
          arr.sort();

        for (i = arr_size - 2; i >= 0; i--) {
            if (arr[i] != arr[arr_size - 1]) {
                console.log("The second largest element is " + arr[i]);
                return;
            }
        }
  
        console.log("There is no second largest element");
    }

     let arr= [10,20,76,98,51];
     let n = arr.length;
        for(i=0;i<n;i++)
        {
            arr[i];
        }
               
        for(i=0;i<n;i++) 
        {
            for(j=i+1;j<n;j++)
            {
                if(arr[i]<arr[j])   //swapping check
                {
                   let temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
        
        console.log("Second Largest element is "+arr[1]);
        console.log("Second Smallest element is "+arr[n-2]);