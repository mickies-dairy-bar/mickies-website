(this["webpackJsonpmickies-website"]=this["webpackJsonpmickies-website"]||[]).push([[0],[,,,,,,,function(e,a,n){e.exports=n(18)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(6),o=n.n(r),c=(n(12),n(1)),s=n(2),d=n(4),l=n(3),m=(n(13),(new Date).getDay()),p=[{day:"Sunday",hours:"7AM-2PM",dayOfWeek:0},{day:"Monday",hours:"CLOSED",dayOfWeek:1},{day:"Tuesday",hours:"7AM-2PM",dayOfWeek:2},{day:"Wednesday",hours:"7AM-2PM",dayOfWeek:3},{day:"Thursday",hours:"7AM-2PM",dayOfWeek:4},{day:"Friday",hours:"7AM-2PM",dayOfWeek:5},{day:"Saturday",hours:"7AM-2PM",dayOfWeek:6}];p=p.slice(m).concat(p.slice(0,m));var u=function(e){Object(d.a)(n,e);var a=Object(l.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"mickies-hours"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",null,"HOURS"),i.a.createElement("hr",{className:"solid"}),i.a.createElement("p",null,p.map((function(e){return i.a.createElement("div",{key:e.dayOfWeek},e.dayOfWeek===m?i.a.createElement("b",null,e.day," : ",e.hours):i.a.createElement("div",null,e.day," : ",e.hours))}))),i.a.createElement("p",{className:"takeout-only"},"We are currently ",i.a.createElement("b",null,"TAKEOUT ONLY")),i.a.createElement("p",null,"Call us at"," ",i.a.createElement("a",{href:"tel:6082569476"},i.a.createElement("u",null,i.a.createElement("b",null,"(608) 256-9476")))," ","to place a takeout order")))}}]),n}(t.Component),h=(n(14),[{name:"Breakfast",description:"",types:[{name:"Mickies Specialties",description:"",footnotes:[],items:[{name:"Scrambler",description:"Layer of yanks, three eggs (scrambled unless specified otherwise), one meat or two veggies, cheese (cheddar by default), gravy (on top, side, or none), and toast. Additional veggies may be added for $.50 each. Additional meats and cheeses are $1 each.",price:"$10"},{name:"Breakfast Sandwich",description:"Bagel or English Muffin or Toast, Bacon or Ham or Sausage, American or Cheddar or Swiss or Pepperjack, and 1 Egg cooked any style.",price:"$6",footnotes:"* May add up to 2 veggies free of charge, upon request"},{name:"Steak and Eggs",description:"Hand-cut sirloin averaging 10 oz., 2 eggs, toast, and yanks.",price:"$14"},{name:"Pork Chops and Eggs",description:"Two marinated boneless pork chops, 2 eggs, toast and yanks.",price:"$12"},{name:"French Toast",description:"2 cinnamon rolls cut in half, battered, and grilled.",price:"$7",footnotes:"* Half order available for - $5"}]},{name:"Eggs & Toast",description:"",footnotes:["Any egg after the first - $1.50","Egg whites - +$.50 per egg"],items:[{name:"1 Egg no toast",description:"",price:"$1.50"},{name:"2 Eggs no toast",description:"",price:"$3"},{name:"2 Eggs and toast",description:"",price:"$4"}]},{name:"Omelets",description:"",footnotes:[],items:[{name:"Plain Omelet with Toast",description:"",price:"$4"},{name:"Veggie Omelet w/ Yanks",description:"Onions, peppers, mushrooms, broccoli, spinach, tomato, and choice of cheese",price:"$10"},{name:"Chili Cheese Omelet w/Yanks",description:"American cheese omelet with homemade chili and cheddar on top",price:"$10"},{name:"Reuben Omelet w/Yanks",description:"Corned beef, Swiss, thousand island, and sauerkraut",price:"$10"},{name:"Oriental Chicken Omelet w/Yanks",description:"Bamboo shoots, water chestnuts, baby corn, bean sprouts, onions, peppers, mushrooms, chicken breast, and stir-fry sauce. Cheese may be added to for no additional charge.",price:"$10"}]},{name:"Pancakes",description:"Listed price is 2 pancakes. Subtract $2 for 1 pancake.",items:[{name:"Buttermilk Pancakes",description:"",price:"$7"},{name:"Whole Grain Pancakes",description:"",price:"$7"},{name:"Cornmeal Pancakes",description:"",price:"$7"},{name:"Blueberry Pancakes",description:"",price:"$8"},{name:"Chocolate Chip Pancakes",description:"White chocolate chips, Milk chocolate chips, Cocoa Powder, and Vanilla Syrup",price:"$8"},{name:"Strawberry Pancakes",description:"Strawberries and Whipped Cream on Top",price:"$8"},{name:"Banana Cinnamon Nut Pancakes",description:"Whole grain batter base (Walnuts)",price:"$8"},{name:"Griddle Cakes",description:"Whole grain batter, apples, cinnamon, raisins, oatmeal",price:"$8"}]}]},{name:"Sandwiches",description:"Served with pickle chips +Add Grilled Onions to sandwiches free of charge",types:[{items:[{name:"Hamburger",description:"Lettuce and tomato",price:"$4.50"},{name:"Cheeseburger",description:"Lettuce and tomato",price:"$5.50"},{name:"Mushroom and Onion Burger",description:"Lettuce and tomato",price:"$5"},{name:"Patty Melt",description:"Burger on grilled rye with Swiss and grilled onions",price:"$5.50"},{name:"Cheddar Melt",description:"Burger on grilled rye with Cheddar and grilled onions",price:"$5.50"},{name:"BLT",description:"on wheat toast with mayo",price:"$5"},{name:"Grilled Cheese",description:"on wheat with American",price:"$3"},{name:"Grilled Ham and Cheese",description:"",price:"$5"},{name:"Corned Beef Swiss on Rye",description:"",price:"$6"},{name:"Hot Dog",description:"",price:"$3.50"},{name:"Chili Cheese Dog",description:"",price:"$7"},{name:"Chicken Tenders",description:"",price:"$6"}]}]},{name:"Lunch Plates",description:"Served with pickle chips and Fries, Yanks, or Potato Salad. May substitute a cup of soup for $1 or a bowl of soup for $2. Subtract $3 if no side is desired.",types:[{items:[{name:"Mickie Burger",description:"Bacon and Swiss burger, with lettuce and tomato. Cheese choice may be substituted",price:"$10"},{name:"Turkey Burger",description:"with lettuce and tomato. Cheese may be added for no additional charge.",price:"$8"},{name:"Reuben Sandwich",description:"Corned beef, Swiss, sauerkraut, and thousand island on grilled rye",price:"$9.50"},{name:"Turkey Club",description:"3 pieces wheat toast, mayo, lettuce, tomato, bacon, and sliced turkey breast",price:"$9"},{name:"Grilled Turkey and Swiss",description:"on grilled rye",price:"$8"},{name:"Meatloaf Sandwich",description:"on wheat bread with homemade corned beef gravy",price:"$9"},{name:"Tuna & Eggsalad Club",description:"3 pieces wheat toast, lettuce, tomato, Swiss, tuna salad, egg salad",price:"$8.50"},{name:"Redfish",description:"2 pieces hand-breaded and deep fried redfish on hamburger bun, lettuce, tomato",price:"$9"}]}]},{name:"Dinners",description:"Served with soup or salad and choice of potato. Subtract $2 per side not desired.",types:[{items:[{name:"Philly Cheesesteak",description:"Thinly sliced ribeye, onions, peppers, mushrooms, and Swiss",price:"$12"},{name:"Steak Sandwich",description:"Sirloin tips on bun with lettuce and tomato",price:"$11"},{name:"Cajun Steak Sandwich",description:"Sirloin tips on bun with lettuce, tomato and homemade Cajun seasoning",price:"$11"},{name:"Chicken Sandwich",description:"grilled on bun with lettuce and tomato",price:"$11"},{name:"Cajun Chicken Sandwich",description:"grilled on bun with lettuce, tomato and homemade Cajun seasoning",price:"$11"},{name:"Chicken Club",description:"3 pieces wheat toast, mayo, lettuce, tomato, bacon, Swiss",price:"$12"},{name:"Liver and Onions",description:"Beef liver served with bacon",price:"$12"}]}]},{name:"Side Orders and Salads",description:"",types:[{items:[{name:"Fries, Yanks, or Potato Salad",description:"",price:"$3"},{name:"Sweet Potato Fries",description:"",price:"$4"},{name:"Cheese Curds",description:"",price:"$6"},{name:"Toast",description:"White, Wheat, Rye",price:"$1"},{name:"English Muffin or Bagel",description:"",price:"$1.50"},{name:"Cream Cheese",description:"",price:"$1"},{name:"Homemade corned beef hash",description:"",price:"$5"},{name:"Ham, Bacon, or Sausage",description:"",price:"$4"},{name:"Cinnamon Rolls",description:"",price:"$1.50"},{name:"Coffee Cake",description:"",price:"$3"},{name:"Soup and Chili",description:"Onions on chili are free, Cheddar is $1",price:"Cup $4 Bowl $5 "},{name:"Side Salad",description:"Lettuce, cabbage, carrots, cucumbers, tomatoes, and croutons",price:"$4"},{name:"Chicken Salad",description:"Lettuce, cabbage, carrots, cucumbers, tomatoes, cheddar, grilled chicken breast and croutons",price:"$9"},{name:"Chef Salad",description:"Lettuce, cabbage, carrots, cucumbers, tomatoes, turkey, ham, cheddar, Swiss, and croutons",price:"$9"}]}]},{name:"Drinks",description:"",types:[{items:[{name:"Shakes",description:"",price:"$5.50"},{name:"Malts",description:"",price:"$6"},{name:"Rootbeer Float",description:"",price:"$3.50"},{name:"Small juice",description:"",price:"$1.50"},{name:"Large juice",description:"",price:"$2"},{name:"Small milk",description:"",price:"$1.50"},{name:"Large milk",description:"",price:"$2"},{name:"Hot Chocolate",description:"",price:"$2"},{name:"Coffee, Tea, Fountain Soda",description:"",price:"$2"},{name:"Canned Soda",description:"",price:"$1.50"}]}]}]),b=[{name:"Cheese",description:"American, Cheddar, , Swiss, Pepperjack",price:"$1"},{name:"Meats",description:"Bacon, Ham, Sausage, Corned Beef, Chicken (Turkey and Hamburger upon request), NO STEAK",price:"$1"},{name:"Vegetables",description:"Onions, Peppers, Mushrooms, Broccoli, Spinach, Sauerkraut, Jalape\xf1os, Tomatoes",price:"$.50"}],g=function(e){Object(d.a)(n,e);var a=Object(l.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=i.a.createElement("div",{className:"omelet-ingredients"},i.a.createElement("h4",null,"Omelet Ingredients"),i.a.createElement("div",null,b.map((function(e){return i.a.createElement("div",null,i.a.createElement("b",null,e.name," - ",e.price),i.a.createElement("div",null,e.description))}))));return i.a.createElement("div",{className:"mickies-menu"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",null,"Menu"),i.a.createElement("hr",{className:"solid"}),h.map((function(a){return i.a.createElement("div",{className:"category"},i.a.createElement("h2",null,a.name),i.a.createElement("p",null,a.description),i.a.createElement("div",null,a.types.map((function(a){return i.a.createElement("div",{className:"sub-category"},i.a.createElement("h3",null,a.name),i.a.createElement("p",null,a.description),"Omelets"===a.name?i.a.createElement("div",null,e):i.a.createElement("div",null),i.a.createElement("div",{className:"item-container"},a.items.map((function(e){return i.a.createElement("li",{className:"item"},i.a.createElement("div",null,i.a.createElement("b",null,e.name),i.a.createElement("b",null,e.price)),i.a.createElement("p",null,e.description,i.a.createElement("br",null),i.a.createElement("i",null,e.footnotes)))}))))}))))}))))}}]),n}(t.Component),f=(n(15),function(e){Object(d.a)(n,e);var a=Object(l.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"menu"},i.a.createElement("div",null,i.a.createElement("b",null,"Mickie's Dairy Bar")))}}]),n}(t.Component)),y=(n(16),function(e){Object(d.a)(n,e);var a=Object(l.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"scrollToTop",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"top-shadow",style:{position:"absolute",zIndex:"100"}},i.a.createElement("div",null)),i.a.createElement("div",{className:"footer-logo"},i.a.createElement("b",null,"Mickie's Dairy Bar")))}}]),n}(t.Component));n(17);var $=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null),i.a.createElement(u,null),i.a.createElement(g,null),i.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c98019ae.chunk.js.map