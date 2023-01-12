const speakerSection = document.querySelector('#mobile_skpeakers');
const contents = `
<div class="row">
    <div class="col-12">
        <center>
            <h2>speakers</h2>
        </center>
    </div>
</div>

<div class="row speakers_cards">
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-4 speakers">
                    <img src="images/speaker_01.png" alt="">
                </div>
                <div class="col-8">
                    <p>
                        <span class="name">Sara Belete</span>
                        <br>
                        <span class="proffesionalism">
                        Director Sales Operations EMEA @ Nutanix
                        </span>
                        <br> Sarah Belete is a Sales Operations leader at Nutanix who partners with executives to focus on the company’s growth goals, go-to-market strategy framework, and implement business processes.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-4 speakers">
                    <img src="images/speaker_02.png" alt="">
                </div>
                <div class="col-8">
                    <p>
                        <span class="name">Mimi Omokri</span>
                        <br>
                        <span class="proffesionalism">
                        Head of Business @ Uber
                        </span>
                        <br> Mimi Omokri has a long and varied career, serving as an executive for numerous high-profile companies and currently, Uber’s Head of Business Development for Sub-Saharan Africa, one of the fast-growing regions for the company.</p>
                </div>
            </div>
        </div>
    </div>

    <!--Hiden speakers section in Mobile version-->

</div>
    <div class="row">
        <div class="col-1"></div>
        <div class="col-10" id="click_more">
            <span class="more_button">See  More </span>
        </div>
    </div>
    <!--Hiden speakers section in Mobile version-->

    <section class="hiden">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-4 speakers">
                        <img src="images/speaker_03.png" alt="">
                    </div>
                    <div class="col-8">
                        <p>
                            <span class="name">Prathna Singh</span>
                            <br>
                            <span class="proffesionalism">
                            Managing Director @ Accenture
                            </span>
                            <br> Prathna Singh is a Managing Director at Accenture leading high performing teams that create new value for organisations in a highly disrupted and digital world. She has been at Accenture for 15 years and has worked across 4 continents partnering with clients to navigate their digital strategy with agility, co-creating digital solutions powered by design, intelligence and emerging technology. .</p>
                    </div>
                </div>
            </div>
        </div>



        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-4 speakers">
                        <img src="images/speaker_04.png" alt="">
                    </div>
                    <div class="col-8">
                        <p>
                            <span class="name">Nadia Rintoul</span>
                            <br>
                            <span class="proffesionalism">
                            Scrum Master R&D @ NTT
                            </span>
                            <br>Nadia graduated from University of the Free State in 2008 earning a B.Com (Hons) in Strategic Management. After completing her degree, she decided to move to Johannesburg to begin her career in the FMCG industry.</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-4 speakers">
                        <img src="images/speaker_05.png" alt="">
                    </div>
                    <div class="col-8">
                        <p>
                            <span class="name">Milisa Kentane</span>
                            <br>
                            <span class="proffesionalism">
                            Head of Communication @ SENTECH
                            </span>
                            <br> Milisa is the Head of Communication and Media Spokesperson at SENTECH, has over 10 years’ management experience, and an Office Bearer on the Governing Body of an NPO. She is a member of the Institute of Directors Southern Africa (IODSA) </p>
                    </div>
                </div>
            </div>
        </div>



        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-4 speakers">
                        <img src="images/speaker_06.png" alt="">
                    </div>
                    <div class="col-8">
                        <p>
                            <span class="name">Maritza Curry</span>
                            <br>
                            <span class="proffesionalism">
                            Head of Data @ RCS
                            </span>
                            <br> Curry has been involved in Data Analytics since 2001, fulfilling a diversity of roles, including ETL development, front end development, BI project management, BI business analysis, dimensional modelling and Data Governance.</p>
                    </div>
                </div>
            </div>
        </div>
        <!--Hiden speakers section in Mobile version-->

        <div class="row">
             <div class="col-1"></div>
            <div class="col-10" id="click_less">
                <span class="more_button">see less </span>
            </div>
        </div>`;
speakerSection.innerHTML += contents;