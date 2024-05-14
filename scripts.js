


window.onload = function () {
    const phrasalVerbs = [
        ["act up", "a face nazuri", "The computer is acting up again."],
        ["add up", "a aduna", "The numbers don't add up."],
        ["ask for", "a cere", "She asked for a raise."],
        ["back away", "a se retrage", "He backed away slowly, fearing the dog."],
        ["back down", "a recula", "They backed down from the argument."],
        ["back out", "a se retrage", "She backed out of the deal at the last minute."],
        ["back up", "a susține", "I'll back you up in the meeting."],
        ["blow up", "a exploda", "The fireworks blew up in the sky."],
        ["break down", "a se strica", "The car broke down on the highway."],
        ["break in", "a forța intrarea", "Burglars broke in while we were on vacation."],
        ["break into", "a sparge (un cod)", "They managed to break into the safe."],
        ["break up", "a se despărți", "They broke up after years of dating."],
        ["bring about", "a provoca", "The new law brought about many changes."],
        ["bring along", "a aduce cu sine", "Can I bring my friend along?"],
        ["bring back", "a aduce înapoi", "She brought back souvenirs from her trip."],
        ["bring down", "a reduce", "They managed to bring down the crime rate."],
        ["bring forward", "a propune", "He brought forward a new plan."],
        ["bring up", "a ridica (o problemă)", "She brought up an interesting point."],
        ["call back", "a reveni asupra unui subiect", "I'll call you back later."],
        ["call for", "a cere", "The situation calls for immediate action."],
        ["call off", "a anula", "They called off the event due to bad weather."],
        ["call on", "a vizita", "We decided to call on our neighbors."],
        ["call out", "a striga", "He called out for help."],
        ["care for", "a avea grijă de", "She cares for her sick mother."],
        ["carry on", "a continua", "They carried on with their plans."],
        ["carry out", "a efectua", "The scientists carried out experiments."],
        ["catch on", "a prinde", "The trend finally caught on."],
        ["catch up", "a ajunge la zi", "I need to catch up on my reading."],
        ["check in", "a se înregistra", "We need to check in at the hotel."],
        ["check out", "a verifica", "Let's check out that new restaurant."],
        ["check over", "a verifica", "Please check over the report before submitting it."],
        ["check up on", "a verifica", "I'll check up on the kids later."],
        ["cheer up", "a îmbărbăta", "Her friends tried to cheer her up."],
        ["chip in", "a contribui", "Everyone chipped in to help."],
        ["clean up", "a face curățenie", "They cleaned up the mess."],
        ["clear up", "a se clarifica", "The situation cleared up after the misunderstanding."],
        ["come about", "a se întâmpla", "How did this come about?"],
        ["come across", "a întâlni (întâmplător)", "We came across an old photo in the attic."],
        ["come along", "a avansa", "How is the project coming along?"],
        ["come around", "a schimba părerea", "She'll come around eventually."],
        ["come back", "a reveni", "He came back after years abroad."],
        ["come by", "a obține", "Can I come by some extra tickets?"],
        ["come down with", "a se îmbolnăvi de", "He came down with the flu."],
        ["come forward", "a se oferi voluntar", "Several witnesses came forward."],
        ["come in", "a intra", "Come in and make yourself at home."],
        ["come off", "a reuși", "The event came off without a hitch."],
        ["come on", "a veni", "Come on, let's go."],
        ["come out", "a apărea", "The sun came out after the storm."],
        ["come over", "a veni în vizită", "Feel free to come over anytime."],
        ["come up", "a apărea", "An unexpected issue came up."],
        ["count on", "a conta pe", "You can always count on me."],
        ["cross out", "a șterge", "She crossed out the wrong answer."],
        ["cut back", "a reduce", "They decided to cut back on expenses."],
        ["cut down", "a reduce", "He's trying to cut down on sweets."],
        ["cut off", "a întrerupe", "The phone call was cut off abruptly."],
        ["cut out", "a elimina", "She cut out junk food from her diet."],
        ["deal with", "a se ocupa de", "We need to deal with this problem."],
        ["die down", "a se potoli", "The noise finally died down."],
        ["do away with", "a scăpa de", "They want to do away with the old system."],
        ["do over", "a refăce", "I'll do the assignment over."],
        ["do without", "a se descurca fără", "We'll have to do without electricity for a while."],
        ["draw up", "a întocmi", "They drew up a contract."],
        ["drop by", "a trece pe la", "Feel free to drop by anytime."],
        ["drop off", "a lăsa", "Can you drop off the package at the post office?"],
        ["drop out", "a renunța", "He dropped out of college."],
        ["eat out", "a mânca în oraș", "Let's eat out tonight."],
        ["end up", "a sfârși", "We ended up going to the beach."],
        ["fall apart", "a se destrăma", "The old house is falling apart."],
        ["fall down", "a cădea", "She fell down the stairs."],
        ["fall for", "a se îndrăgosti de", "She fell for him the moment they met."],
        ["fall off", "a scădea", "Sales tend to fall off during the winter months."],
        ["fall out", "a se certa", "They fell out over a misunderstanding."],
        ["fall through", "a eșua", "The plan fell through due to lack of funding."],
        ["figure out", "a înțelege", "Can you figure out how this works?"],
        ["fill in", "a completa", "Please fill in the form."],
        ["fill out", "a completa", "He filled out the application form."],
        ["find out", "a afla", "I need to find out what happened."],
        ["get across", "a transmite", "She struggled to get her point across."],
        ["get ahead", "a progresa", "He's determined to get ahead in his career."],
        ["get along with", "a se înțelege cu", "She gets along well with her coworkers."],
        ["get around", "a evita", "He managed to get around the rules."],
        ["get at", "a insinua", "What are you getting at?"],
        ["get away", "a scăpa", "They managed to get away from the crowd."],
        ["get away with", "a scăpa nepedepsit", "He got away with cheating on the test."],
        ["get back", "a se întoarce", "We got back from vacation yesterday."],
        ["get by", "a se descurca", "They're struggling to get by on one income."],
        ["get down", "a se liniști", "He got down on one knee and proposed."],
        ["get into", "a se implica în", "She got into trouble for being late."],
        ["get off", "a coborî", "We got off the bus at the next stop."],
        ["get on", "a urca", "They got on the train to London."],
        ["get out", "a ieși", "We need to get out of the house more often."],
        ["get over", "a trece peste", "It took her a long time to get over the breakup."],
        ["get rid of", "a scăpa de", "They need to get rid of the old furniture."],
        ["get through", "a reuși să comunice", "He couldn't get through to her."],
        ["get together", "a se întâlni", "Let's get together for dinner sometime."],
        ["get up", "a se ridica", "She got up early to go for a run."],
        ["give away", "a dona", "They gave away all their old clothes to charity."],
        ["give back", "a returna", "He gave back the money he owed."],
        ["give in", "a ceda", "She finally gave in and agreed."],
        ["give off", "a emana", "The flowers gave off a sweet scent."],
        ["give out", "a se termina", "Their patience finally gave out."],
        ["give up", "a renunța", "Don't give up on your dreams."],
        ["go about", "a aborda", "They went about their work quietly."],
        ["go against", "a se opune", "It goes against my principles."],
        ["go ahead", "a continua", "Go ahead and start without me."],
        ["go along", "a fi de acord", "She went along with the plan."],
        ["go around", "a fi suficient", "There's enough food to go around."],
        ["go away", "a pleca", "Go away and leave me alone."],
        ["go back", "a reveni", "He went back to retrieve his umbrella."],
        ["go down", "a scădea", "The sun went down behind the mountains."],
        ["go for", "a încerca să obțină", "He's going for the gold medal."],
        ["go off", "a exploda", "The bomb went off with a loud bang."],
        ["go on", "a continua", "The meeting went on late into the night."],
        ["go out", "a ieși în oraș", "They decided to go out for dinner."],
        ["go over", "a examina", "Let's go over the details one more time."],
        ["go through", "a trece prin", "She went through a lot of hardship."],
        ["go together", "a se potrivi", "The colors go together nicely."],
        ["go up", "a crește", "The price of gas is going up again."],
        ["go without", "a se descurca fără", "I can't go without my morning coffee."],
        ["grow apart", "a se îndepărta", "They grew apart after high school."],
        ["grow up", "a crește", "He grew up in a small town."],
        ["hand back", "a returna", "Please hand back your assignments."],
        ["hand down", "a transmite", "The tradition has been handed down for generations."],
        ["hand in", "a preda", "Please hand in your homework by Friday."],
        ["hand out", "a distribui", "They handed out flyers on the street corner."],
        ["hang around", "a sta pe lângă", "They like to hang around the mall on weekends."],
        ["hang up", "a închide telefonul", "She hung up the phone abruptly."],
        ["hold back", "a se abține", "He held back his tears."],
        ["hold off", "a amâna", "They decided to hold off on making a decision."],
        ["hold on", "a aștepta", "Please hold on while I transfer your call."],
        ["hold onto", "a ține strâns", "She held onto the railing as she walked down the stairs."],
        ["hold up", "a întârzia", "Traffic held us up on the way to the airport."],
        ["keep away", "a se feri de", "Keep away from the edge of the cliff."],
        ["keep down", "a ține sub control", "He's trying to keep down his cholesterol levels."],
        ["keep from", "a împiedica", "He couldn't keep from laughing."],
        ["keep in", "a reține", "I'll keep your secret."],
        ["keep off", "a evita", "Keep off the grass."],
        ["keep on", "a continua", "He kept on working despite his fatigue."],
        ["keep out", "a nu lăsa să intre", "Keep out of the restricted area."],
        ["keep up", "a menține", "She tries to keep up with the latest fashion trends."],
        ["let down", "a dezamăgi", "He felt let down by his friends."],
        ["let go", "a elibera", "She let go of the rope and fell."],
        ["let in", "a lăsa să intre", "Let me in, it's cold out here."],
        ["let off", "a ierta", "He let her off with a warning."],
        ["let on", "a dezvălui", "She didn't let on that she knew the truth."],
        ["let out", "a lăsa să iasă", "She let out a sigh of relief."],
        ["let up", "a înceta", "The rain showed no sign of letting up."],
        ["live down", "a uita de un eșec", "He'll never live down that embarrassing moment."],
        ["live for", "a trăi pentru", "She lives for her children."],
        ["live off", "a trăi din", "He lives off his inheritance."],
        ["live on", "a trăi din", "They lived on bread and water."],
        ["live up to", "a corespunde", "She tries to live up to her parents' expectations."],
        ["look after", "a avea grijă de", "Can you look after the kids while I'm gone?"],
        ["look ahead", "a privi în viitor", "We need to look ahead and plan for the future."],
        ["look back", "a privi în trecut", "She looked back on her childhood with fondness."],
        ["look down on", "a privi cu dispreț", "They looked down on him because of his humble background."],
        ["look for", "a cauta", "He's looking for his keys."],
        ["look forward to", "a aștepta cu nerăbdare", "We're looking forward to the party."],
        ["look into", "a investiga", "They promised to look into the matter."],
        ["look out", "a fi atent", "Look out for cars when you cross the street."],
        ["look over", "a examina", "He looked over the contract before signing it."],
        ["look up", "a căuta", "I'll look up the address for you."],
        ["look up to", "a admira", "She looks up to her older sister."],
        ["make for", "a se îndrepta către", "They made for the nearest exit."],
        ["make off with", "a fura", "The thief made off with the jewels."],
        ["make out", "a înțelege", "I can't make out what he's saying."],
        ["make up", "a inventa", "She made up an excuse for being late."],
        ["make up for", "a compensa", "He tried to make up for his mistake."],
        ["make up with", "a se împăca", "They made up with each other after the argument."],
        ["pick out", "a alege", "She picked out a dress for the party."],
        ["pick up", "a ridica", "Can you pick up some milk on your way home?"],
        ["play along", "a se prefăce", "She decided to play along with his joke."],
        ["play down", "a minimaliza", "They tried to play down the significance of the event."],
        ["play up", "a face pe cineva să se simtă important", "He always plays up his achievements."],
        ["point out", "a atrage atenția asupra", "She pointed out the mistake in the report."],
        ["put away", "a pune la loc", "Please put away your toys."],
        ["put down", "a lăsa jos", "He put down the heavy box."],
        ["put off", "a amâna", "They put off the meeting until next week."],
        ["put on", "a pune (haine)", "She put on her coat before going outside."],
        ["put out", "a stinge", "He put out the fire with a bucket of water."],
        ["put through", "a conecta", "Please hold while I put you through to the manager."],
        ["put together", "a compune", "She put together a delicious meal."],
        ["put up", "a caza", "We can put you up for the night."],
        ["put up with", "a tolera", "She can't put up with his behavior anymore."],
        ["run across", "a întâlni (întâmplător)", "I ran across an old friend at the store."],
        ["run after", "a alerga după", "She ran after the bus but couldn't catch it."],
        ["run away", "a fugi", "The child ran away from home."],
        ["run down", "a se descărca", "The battery ran down after hours of use."],
        ["run into", "a întâlni (întâmplător)", "We ran into each other at the mall."],
        ["run out", "a rămâne fără", "We're running out of time."],
        ["run over", "a lovi cu mașina", "He accidentally ran over his neighbor's cat."],
        ["run through", "a trece în revistă", "Let's run through the plan one more time."],
        ["run up", "a acumula datorii", "He ran up a huge debt."],
        ["see about", "a se ocupa de", "I'll see about getting us some tickets."],
        ["see off", "a conduce până la plecare", "We went to the airport to see her off."],
        ["see through", "a vedea adevărata natură a cuiva", "She could see through his lies."],
        ["set off", "a porni la drum", "They set off early in the morning."],
        ["set up", "a iniția", "They set up a new business together."],
        ["show off", "a se lăuda", "He likes to show off his new car."],
        ["show up", "a apărea", "He promised to come, but he never showed up."],
        ["sort out", "a rezolva", "We need to sort out this mess."],
        ["stand by", "a fi gata să ajute", "They stood by their friend in times of trouble."],
        ["stand for", "a reprezenta", "The letters stand for the initials of his name."],
        ["stand out", "a se remarca", "She stands out in a crowd."],
        ["stand up", "a nu veni la o întâlnire", "He stood her up on their date."],
        ["take after", "a semăna cu", "He takes after his father in many ways."],
        ["take apart", "a demonta", "He took apart the engine to see what was wrong."],
        ["take back", "a retrage", "I take back what I said."],
        ["take down", "a demonta", "They took down the tent before the storm hit."],
        ["take for", "a confunda cu", "Don't take me for a fool."],
        ["take in", "a înțelege", "It took a while for the news to sink in."],
        ["take off", "a decola", "The plane took off on time."],
        ["take on", "a angaja", "They took on more staff to handle the workload."],
        ["take out", "a scoate", "Can you take out the trash?"],
        ["take over", "a prelua controlul", "She took over as CEO after the retirement of her father."],
        ["take up", "a începe să facă", "He took up painting in his retirement."],
        ["talk back", "a răspunde sfidător", "She got in trouble for talking back to her teacher."],
        ["talk down to", "a vorbi condescendent", "He talked down to her as if she were a child."],
        ["talk into", "a convinge să facă", "She talked him into going to the party."],
        ["talk over", "a discuta", "Let's talk over the details before making a decision."],
        ["talk up", "a promova", "He talked up the benefits of the new product."],
        ["think back", "a-și aminti", "She thought back to her childhood."],
        ["think over", "a reflecta", "Take some time to think it over before deciding."],
        ["think through", "a gândi în profunzime", "He didn't think through the consequences of his actions."],
        ["think up", "a inventa", "He thought up a clever solution to the problem."],
        ["throw away", "a arunca", "They threw away all the old junk in the attic."],
        ["throw out", "a arunca", "She threw out the old newspapers."],
        ["try on", "a încerca (haine)", "She tried on several dresses before choosing one."],
        ["try out", "a încerca", "You should try out for the basketball team."],
        ["turn around", "a se întoarce", "The company managed to turn around its fortunes."],
        ["turn away", "a respinge", "They turned away refugees at the border."],
        ["turn back", "a se întoarce", "We had to turn back because of the storm."],
        ["turn down", "a respinge", "They turned down his offer of help."],
        ["turn into", "a deveni", "The frog turned into a prince."],
        ["turn off", "a opri", "He turned off the lights before leaving."],
        ["turn on", "a porni", "She turned on the radio to listen to music."],
        ["turn out", "a se dovedi", "It turned out that he was right all along."],
        ["turn over", "a răsturna", "He turned over a new leaf and changed his ways."],
        ["turn up", "a apărea", "She turned up unexpectedly at the party."],
        ["wake up", "a se trezi", "She woke up feeling refreshed."],
        ["walk away", "a pleca", "He decided to walk away from the argument."],
        ["walk out", "a părăsi", "They walked out in protest."],
        ["wear off", "a trece", "The effects of the medication wore off quickly."],
        ["wear out", "a se uza", "His shoes were worn out from all the walking."],
        ["work out", "a rezolva", "They worked out a solution to the problem."],
        ["work up", "a provoca", "He worked up the courage to ask her out."],
        ["write down", "a nota", "Don't forget to write down the address."],
        ["write out", "a întocmi în scris", "She wrote out a list of instructions."],
        ["write up", "a scrie", "He wrote up a report on the findings."],
    ];


    phrasalVerbs.forEach(function (verb) {
        addVerbRow(verb[0], verb[1], verb[2]);
    });

    function addVerbRow(expresion, translation, explication) {
        const table = document.getElementById('PhrasalVerbsTabel');
        var row = table.insertRow(-1); // Insert row at the end of the table
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.classList.add("border", "bold", "text-3xl" , "font-mono", "p-5");
        cell2.classList.add("border","bold", "text-3xl","font-mono", "p-5");
        cell3.classList.add("border","bold", "text-3xl","font-mono", "p-5");

        cell1.innerHTML = expresion;
        cell2.innerHTML = translation;
        cell3.innerHTML = explication;

    }


    function generateRandomNumber() {
        return Math.floor(Math.random() * phrasalVerbs.length);
    }

    var Test = document.getElementById('Test');

    Test.addEventListener('click', openPopup);
    
    function openPopup() {
        var popup = document.createElement("div");
        popup.classList.add("popup");


        x=generateRandomNumber();
        var text=document.createElement("p");
        text.type="text";
        text.textContent="Cum se traduce in romana expresia "+phrasalVerbs[x][0] ;
        text.classList.add("text-2xl" , "font-mono", "p-2");

        var example=document.createElement("p");
        example.type="text";
        example.textContent="" ;
        example.classList.add("text-2xl" , "font-mono", "p-2");
    
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Introduceți text aici...";
        input.classList.add("input");
        input.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                verifyButton.click();
            }
        });
    
        var buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
    
        var generateButton = document.createElement("button");
        generateButton.innerHTML = "Next &#9858;";
        generateButton.classList.add("verify");

        generateButton.addEventListener("click",function()
            {
                x=generateRandomNumber();
                text.textContent="Cum se traduce in romana expresia "+phrasalVerbs[x][0] ;
                input.value=""; // pentru input box trb value
                example.innerHTML=""; // pentru text precum p trb innerHTML
                input.classList.remove("input_correct");
                input.classList.remove("input_incorrect");
                input.classList.add("input");
            });

        var verifyButton = document.createElement("button");
        verifyButton.textContent = "Verify";
        verifyButton.classList.add("verify");

        const removeSpecialChars = str =>
            str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '');

        verifyButton.addEventListener("click",function()
        {
            if (removeSpecialChars(input.value.toLowerCase()) === removeSpecialChars(phrasalVerbs[x][1].toLowerCase()))
                {
                    input.classList.remove("input");
                    input.classList.remove("input_incorrect");
                    input.classList.add("input_correct");
                }
                else
                {
                    input.classList.remove("input");
                    input.classList.remove("input_correct");
                    input.classList.add("input_incorrect");
                    
                    text.innerHTML=phrasalVerbs[x][0]+" => "+phrasalVerbs[x][1];
                }
                example.innerHTML="Eg. " +phrasalVerbs[x][2];
        });
    
        var closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.classList.add("close");
    
        closeButton.addEventListener("click", function() {
            document.body.removeChild(popup);
        });
    
        buttonContainer.appendChild(verifyButton);
        buttonContainer.appendChild(generateButton);
        buttonContainer.appendChild(closeButton);
    
        popup.appendChild(text);
        popup.appendChild(example);
        popup.appendChild(input);
        popup.appendChild(buttonContainer);
    
        document.body.appendChild(popup);
    }
    

}

