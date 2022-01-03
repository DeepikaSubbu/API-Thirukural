var title=document.createElement('H1')
title.setAttribute('id', 'title')
title.setAttribute('class', 'text-center')
title.innerText=("Thirukural")
document.body.appendChild(title)

let cont=document.createElement("div");
cont.setAttribute("class", "container");
document.body.append(cont);

let cont1=document.createElement("div");
cont1.setAttribute("class", "container");
document.body.append(cont1);

let cont2=document.createElement("div");
cont2.setAttribute("class", "container");
document.body.append(cont2);

let cont3=document.createElement("div");
cont3.setAttribute("class", "container");
document.body.append(cont3);



fetch("https://api-thirukkural.vercel.app/api?num=1")
.then((d)=>d.json())
.then((ddata)=>{
    console.log(ddata);
    console.log(ddata.chap_eng)
    cont.innerHTML=` 
    <div1 class="card p-2">
        <div class="col-12 ">
     <div  class=" text-black" >
             <div class="header text-center p-2 m-3 "> ${ddata.number}<div>
             <div class="header text-center p-2 m-3 "> ${ddata.chap_tam}<div>
            
                <div class="p-2 m-3" > ${ddata.chap_eng}</div>
             <div class="text-black  "> ${ddata.eng}</div>
             <div class="text-black  "> ${ddata.eng_exp}</div><br>
            
            <button  onclick='check()'">திருக்குறள்</button>
                
                </div>
                   </div>
              </div1 p-2 m-3>
             
              `
        
        
     
            })
            .catch((er)=>{
                console.log(er);
            });


            dis1=document.createElement('div')
            dis1.setAttribute('id','dis2')
            dis1.setAttribute('class', ' text-center' )
            document.body.appendChild(dis1)
            
            dis2=document.createElement('div')
            dis2.setAttribute('id','dis3')
            dis2.setAttribute('class', ' text-center' )
            document.body.appendChild(dis2)


            function check() {
                fetch("https://api-thirukkural.vercel.app/api?num=1")
                 .then((d)=>d.json())
                    .then((ele)=>{
                       var g=ele.line1   
                       var h=ele.line2 
                
                        document.getElementById('dis2').innerHTML=g;
                        document.getElementById('dis3').innerHTML=h;
            
                
                    })
                    .catch((er)=>{
                        console.log(er);
                    });
                    }





              
             
           

    

        fetch("https://api-thirukkural.vercel.app/api?num=11")
.then((b)=>b.json())
.then((bdata)=>{
    console.log(bdata);
    console.log(bdata.chap_eng)
    cont1.innerHTML=` 
    <div1 class="card p-2">
        <div class="col-12 ">
     <div  class=" text-black" >
             <div class="header text-center p-2 m-3 "> ${bdata.number}<div>
             <div class="header text-center p-2 m-3 "> ${bdata.chap_tam}<div>
            
                <div class="p-2 m-3" > ${bdata.chap_eng}</div>
             <div class="text-black  "> ${bdata.eng}</div>
             <div class="text-black  "> ${bdata.eng_exp}</div><br>
            
            <button  onclick='check1()'">திருக்குறள்</button>
                
                </div>
                   </div>
              </div1 p-2 m-3>
             
              `
        
        
     
            })
            .catch((er)=>{
                console.log(er);
            });


            dis5=document.createElement('div')
            dis5.setAttribute('id','dis4')
            dis5.setAttribute('class', ' text-center' )
            document.body.appendChild(dis5)
            
            dis6=document.createElement('div')
            dis6.setAttribute('id','dis5')
            dis6.setAttribute('class', ' text-center' )
            document.body.appendChild(dis6)
            
            
            function check1() {
                fetch("https://api-thirukkural.vercel.app/api?num=11")
                 .then((bd)=>bd.json())
                    .then((ele1)=>{
                       var g1=ele1.line1   
                       var h1=ele1.line2 
                
                        document.getElementById('dis4').innerHTML=g1;
                        document.getElementById('dis5').innerHTML=h1;
            
                
                    })
                    .catch((er)=>{
                        console.log(er);
                    });
                    }


                    fetch("https://api-thirukkural.vercel.app/api?num=21")
.then((c)=>c.json())
.then((cdata)=>{
    console.log(cdata);
    console.log(cdata.chap_eng)
    cont2.innerHTML=` 
    <div1 class="card p-2">
        <div class="col-12 ">
     <div  class=" text-black" >
             <div class="header text-center p-2 m-3 "> ${cdata.number}<div>
             <div class="header text-center p-2 m-3 "> ${cdata.chap_tam}<div>
            
                <div class="p-2 m-3" > ${cdata.chap_eng}</div>
             <div class="text-black  "> ${cdata.eng}</div>
             <div class="text-black  "> ${cdata.eng_exp}</div><br>
            
            <button  onclick='check2()'">திருக்குறள்</button>
                
                </div>
                   </div>
              </div1 p-2 m-3>
             
              `
        
        
     
            })
            .catch((er)=>{
                console.log(er);
            });


            dis7=document.createElement('div')
            dis7.setAttribute('id','dis6')
            dis7.setAttribute('class', ' text-center' )
            document.body.appendChild(dis7)
            
            dis8=document.createElement('div')
            dis8.setAttribute('id','dis7')
            dis8.setAttribute('class', ' text-center' )
            document.body.appendChild(dis8)
            
            
            function check2() {
                fetch("https://api-thirukkural.vercel.app/api?num=21")
                 .then((cd)=>cd.json())
                    .then((ele2)=>{
                       var g2=ele2.line1   
                       var h2=ele2.line2 
                
                        document.getElementById('dis6').innerHTML=g2;
                        document.getElementById('dis7').innerHTML=h2;
            
                
                    })
                    .catch((er)=>{
                        console.log(er);
                    });
                    }





                    fetch("https://api-thirukkural.vercel.app/api?num=31")
.then((e)=>e.json())
.then((edata)=>{
    console.log(edata);
    console.log(edata.chap_eng)
    cont3.innerHTML=` 
    <div1 class="card p-2">
        <div class="col-12 ">
     <div  class=" text-black" >
             <div class="header text-center p-2 m-3 "> ${edata.number}<div>
             <div class="header text-center p-2 m-3 "> ${edata.chap_tam}<div>
            
                <div class="p-2 m-3" > ${edata.chap_eng}</div>
             <div class="text-black  "> ${edata.eng}</div>
             <div class="text-black  "> ${edata.eng_exp}</div><br>
            
            <button  onclick='check3()'">திருக்குறள்</button>
                
                </div>
                   </div>
              </div1 p-2 m-3>
             
              `
        
        
     
            })
            .catch((er)=>{
                console.log(er);
            });


            dis9=document.createElement('div')
            dis9.setAttribute('id','dis8')
            dis9.setAttribute('class', ' text-center' )
            document.body.appendChild(dis9)
            
            dis10=document.createElement('div')
            dis10.setAttribute('id','dis9')
            dis10.setAttribute('class', ' text-center' )
            document.body.appendChild(dis10)
            
            
            function check3() {
                fetch("https://api-thirukkural.vercel.app/api?num=31")
                 .then((ed)=>ed.json())
                    .then((ele3)=>{
                       var g3=ele3.line1   
                       var h3=ele3.line2 
                
                        document.getElementById('dis8').innerHTML=g3;
                        document.getElementById('dis9').innerHTML=h3;
            
                
                    })
                    .catch((er)=>{
                        console.log(er);
                    });
                    }