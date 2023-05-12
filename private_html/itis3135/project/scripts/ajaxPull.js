function loadDoc1(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("title").innerHTML = "Plastic recycling symbol #1: PET or PETE";
            document.getElementById("content").innerHTML = "PET or PETE (polyethylene terephthalate) is the most common plastic for single-use bottled beverages because it's inexpensive, lightweight and easy to recycle. The PET does not degrade easily during the recycling process and thus has a lower risk of trapping decomposition products that can then leach out. Its recycling rates remain relatively low (around 20%), even though the material is in high demand by manufacturers.";
            document.getElementById("found-in").innerHTML = "<strong>Found in:</strong> Soft drinks, water, ketchup and beer bottles; mouthwash bottles; peanut butter containers; salad dressing; and vegetable oil containers"
            document.getElementById("pic").src = "images/recycleOne.png"
        }
    };
    xhttp.open("GET", "proper.html",true);
    xhttp.send();
}
function loadDoc2(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("title").innerHTML = "Plastic recycling symbol #2: HDPE";
            document.getElementById("content").innerHTML = "HDPE (high-density polyethylene) is a versatile plastic with many uses, especially when it comes to packaging. It carries low risk of leaching and is readily recyclable into many types of goods.";
            document.getElementById("found-in").innerHTML = "Found in: Milk jugs; juice bottles; bleach, detergent and other household cleaner bottles; shampoo bottles; some trash bags and shopping bags; motor oil bottles; butter and yogurt tubs; and cereal box liners.";
            document.getElementById("pic").src = "images/recycle2.png"
        }
    };
    xhttp.open("GET", "proper.html",true);
    xhttp.send();
}
function loadDoc3(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("title").innerHTML = "Plastic recycling symbol #3: PVC or V";
            document.getElementById("content").innerHTML = "PVC (polyvinyl chloride) and V (vinyl) are tough and weather well, so they're commonly used for things like piping and siding. PVC is also cheap, so it's found in plenty of products and packaging. Because chlorine is part of PVC, it can result in the release of highly dangerous dioxins during manufacturing. Remember to never burn PVC, because it releases toxins.";
            document.getElementById("found-in").innerHTML = "Found in: Blister packaging, wire jacketing, siding, windows and piping.";
            document.getElementById("pic").src = "images/recycle3.png"
        }
    };
    xhttp.open("GET", "proper.html",true);
    xhttp.send();
}
function loadDoc4(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("title").innerHTML = "Plastic recycling symbol #4: LDPE";
            document.getElementById("content").innerHTML = "LDPE (low-density polyethylene) is a flexible plastic with many applications. Historically, it hasn't been accepted through most American recycling programs, but more and more communities are starting to accept it.";
            document.getElementById("found-in").innerHTML = "Found in: Squeezable bottles; bread, frozen food, dry-cleaning and shopping bags; tote bags; and furniture.";
            document.getElementById("pic").src = "images/recyclefour.png"
        }
    };
    xhttp.open("GET", "proper.html",true);
    xhttp.send();
}
function loadDoc5(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("title").innerHTML = "Plastic recycling symbol #5: PP";
            document.getElementById("content").innerHTML = "PP (polypropylene) has a high melting point, so it's often chosen for containers that will hold hot liquid. It's gradually becoming more accepted by recyclers.";
            document.getElementById("found-in").innerHTML = "Found in: Some yogurt containers; syrup and medicine bottles; caps; and straws.";
            document.getElementById("pic").src = "images/recyclefive.png"
        }
    };
    xhttp.open("GET", "proper.html",true);
    xhttp.send();
}
function loadDoc6(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("title").innerHTML = "Plastic recycling symbol #6: PS";
            document.getElementById("content").innerHTML = "PS (polystyrene) can be made into rigid or foam products — in the latter case, it's popularly known by the trademark Styrofoam. Styrene monomer (a type of molecule) can leach into foods and is a possible human carcinogen, while styrene oxide is classified as a probable carcinogen. The material was long on environmentalists' hit lists for dispersing widely across the landscape and for being notoriously difficult to recycle. Most places still don't accept it in foam forms because it's 98% air.";
            document.getElementById("found-in").innerHTML = "Found in: Disposable plates and cups, meat trays, egg cartons, carryout containers, aspirin bottles and CD cases.";
            document.getElementById("pic").src = "images/recyclesix.png"
        }
    };
    xhttp.open("GET", "proper.html",true);
    xhttp.send();
}
function loadDoc7(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("title").innerHTML = "Plastic recycling symbol #7: Miscellaneous";
            document.getElementById("content").innerHTML = "A wide variety of plastic resins that don't fit into the previous categories are lumped into this one. Polycarbonate is a #7 plastic —it's the clear, hard plastic that has worried parents ever since studies have shown that BPA (bisphenol A), one of polycarbonate's building blocks, is a hormone disruptor. PLA (polylactic acid), which is made from plants and is carbon-neutral, also falls into the #7 category.";
            document.getElementById("found-in").innerHTML = "Found in: Three- and five-gallon water bottles; bulletproof materials; sunglasses; DVDs; clear plastic cutlery; lighting fixtures; signs and displays; certain food containers; and nylon."
            document.getElementById("pic").src = "images/recycleseven.png"
        }
    };
    xhttp.open("GET", "proper.html",true);
    xhttp.send();
}