        const arr = Array.from($0.children)
        let arr2 = []
        let arr3 = []
        let num = 0
        for(let i=1; i <arr.length;i++){
          if(i%6 === 0){
              arr3.push(arr.slice(num,i)[1].innerText)
              arr2.push(arr.slice(num,i))
              num = i
          }
        }
        console.log(arr3)