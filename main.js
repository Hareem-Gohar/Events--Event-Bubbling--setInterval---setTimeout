// Events and Event Bubbling
        // Event bubbling is a term in which if we click the child, the events of the parent will also fired. to prevent this we will have to stop propagation. OR
       // event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.
        
       let parentContainer = document.querySelector('.Parent').addEventListener('click', (e)=>{
            alert('Parent Container is Clicked');
        });
        let childContainer = document.querySelector('.childContainer').addEventListener('click', ()=>{
            alert('child Container is Clicked')
        });
        let Child = document.querySelector('.child').addEventListener('click', (e)=>{
            e.stopPropagation()
            alert('Child is Clicked')
        });



        // Set-Interval

        let generateRandomColors = () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

         return `rgb(${r}, ${g}, ${b})`;
        }
        
        setInterval(() => {
            let background = generateRandomColors();
            document.querySelector('.Im-disco').style.backgroundColor = background;
        }, 500);
        setInterval(() => {
            let background = generateRandomColors();
            document.querySelector('.Im-disco').style.borderColor = background;
        }, 200);


        // Set-TimeOut
        /* setTimeout(() => {
            let background = generateRandomColors();
            document.querySelector('.Im-disco').style.backgroundColor = background;
        }, 500); */