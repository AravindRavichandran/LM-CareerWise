/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//for Sidebar Navigation
$(document).ready(function(){
    $(".nav-pills a").click(function(){
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();     // active tab  
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});

//for Education
$(document).ready(function(){
    $("#01,#02,#03").hide();
    $("#btn1").click(function(){
        $("#01").show();
    });
    $("#btn2").click(function(){
        $("#02").show();
    });
    $("#btn3").click(function(){
        $("#03").show();
    });
});
 //for Certificates 
$(document).ready(function(){
    var counter = 2;
    $("#btn-certificate").click(function () {
        if(counter>4){
            alert("Only 5 Certificates allow");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDiv' + counter);
        newTextBoxDiv.after().html('<hr /><div class="form-group"> <label class="col-sm-4 control-label" style="padding: 5px;">Certificate & Courses <b> : </b></label> <div class="col-sm-7"> <select class="form-control"> <option value="-1" selected="">Course Name</option><option value="1">Advanced Certificate in Power Distribution Management (ACPDM)</option><option value="2">CCIE - Cisco certified internetwork expert</option><option value="3">CCNA - Cisco Certified Network Associate </option><option value="4">CCNP - Cisco Certified Networking Professional</option><option value="5">Certficate Course in Ticketing</option><option value="6">Certificate Ccourse in Applied Managerial Economics</option><option value="7">Certificate Course in Acupunture</option><option value="8">Certificate Course in Airlines &amp; Travel Industry Management</option><option value="9">Certificate Course In Arabic</option><option value="10">Certificate Course in Basic Programming</option><option value="11">Certificate Course in Capital Market</option><option value="12">Certificate Course In Chinese</option><option value="13">Certificate Course in Computer Engineering (Auto CAD)</option><option value="14">Certificate Course in Computer Operations</option><option value="15">Certificate Course In Computing (CIC)</option><option value="16">Certificate Course In Cosmetic Science </option><option value="17">Certificate Course in Database Programming</option><option value="18">Certificate Course in Derivatives</option><option value="19">Certificate Course In Diet Therapy</option><option value="20">Certificate Course In Disaster Management</option><option value="21">Certificate Course In English For Communication</option><option value="22">Certificate Course In English Improvement</option><option value="23">Certificate Course In Family Savings &amp; Investment</option><option value="24">Certificate Course In Food &amp; Nutrition</option><option value="25">Certificate Course In French</option><option value="26">Certificate Course In Gandhian Thought</option><option value="27">Certificate Course In German</option><option value="28">Certificate Course In Hindi</option><option value="29">Certificate Course In Home Management</option><option value="30">Certificate Course In Internet Application</option><option value="31">Certificate Course in Italian</option><option value="32">Certificate Course In Kannada</option><option value="33">Certificate Course In Library &amp; Information Science</option><option value="34">Certificate Course In Nutrition For The Community</option><option value="35">Certificate Course in Office Automation</option><option value="36">Certificate Course in Operations Research (OR) with Applications in Engineering and Management</option><option value="37">Certificate Course In Organising Child Care Services</option><option value="38">Certificate Course in Portugese</option><option value="39">Certificate Course in Printing and Binding</option><option value="40">Certificate Course In Rural Development</option><option value="41">Certificate Course in Russian</option><option value="42">Certificate Course In Software Application</option><option value="43">Certificate Course in Sound Recording &amp; Reproduction</option><option value="44">Certificate Course In Spanish</option><option value="45">Certificate Course in Sports Coaching</option><option value="46">Certificate Course in System Analysis and Designing</option><option value="47">Certificate Course In Teaching English</option><option value="48">Certificate Course In Techniques Of Translation</option><option value="49">Certificate Course In Tourism Studies</option><option value="50">Certificate Course In Urdu</option><option value="51">Certificate Course in Visual Basic</option><option value="52">Certificate Course in Visual C++</option><option value="53">Certificate Course in Web Application Developer</option><option value="54">Certificate Course in Web Page Designin</option><option value="55">Certificate Course in Welding Technology</option><option value="56">Certificate Course in Windows-NT-Server</option><option value="57">Certificate Course in Women and Legal Literacy</option><option value="58">Certificate Course In Women &amp; Law</option><option value="59">Certificate in Business Skills (CBS)</option><option value="60">Certificate in call center training</option><option value="61">Certificate in Care Waste Management (CHCWM)</option><option value="62">Certificate in Competency Enhancement for ANM/FHW (CCEANM)</option><option value="63">Certificate In Computer Programming (CCP)</option><option value="64">Certificate in Craft and Design Pottery (CCDP)</option><option value="65">Certificate in Empowering Women through Self Help Groups (CWDL)</option><option value="66">Certificate in Energy Management and Audit</option><option value="67">Certificate in Food Safety (CFS)</option><option value="68">Certificate in Guidance (CIG)</option><option value="69">Certificate in HIV and Family Education (CAFE)</option><option value="70">Certificate in Human Rights (CHR)</option><option value="71">Certificate in Intelligence</option><option value="72">Certificate in Intelligence Report-Writing</option><option value="73">Certificate in Laboratory Techniques (CPLT)</option><option value="74">Certificate in Labour in Development (CLD)</option><option value="75">Certificate in Management of Intelligence</option><option value="76">Certificate in Maternal and Child Health Care (CMCHC)</option><option value="77">Certificate in Mircoprocesor Applications</option><option value="78">Certificate in Motorcycle Service &amp; Repair (CMSR)</option><option value="79">Certificate in Network Oriented Office Computing</option><option value="80">Certificate in Newborn and Infant Care (CNIC)</option><option value="81">Certificate in Participatory Forest Management (CPFM)</option><option value="82">Certificate in Primary Education (CPE)</option><option value="83">Certificate in Rural Development (CRD)</option><option value="84">Certificate in Strategic Intelligence Analysis</option><option value="85">Certificate in Web Site Design &amp; Management</option><option value="86">Certificate Programme In Consumer Protection</option><option value="87">Certificate Programme In Environmental Studies</option><option value="88">Certificate Programme In Fashion Design And Merchandising (FDM)</option><option value="89">Certififcate Course in PR</option><option value="90">MCP - Microsoft Certified Professional</option><option value="91">MCSE - Microsoft Certified Systems Engineer.</option><option value="103">Microsoft MCITP Certification</option><option value="104">Microsoft MCTS Certification</option><option value="105">Oracle Certified Associate, Java SE 7 Programmer</option><option value="106">Oracle Certified Professional, Java SE 7 Programmer</option><option value="92">Post Graduate Certificate Course in Copyediting</option><option value="93">Post Graduate Certificate Course in Marine Engineering</option><option value="94">Post Graduate Certificate Course in Photography Design</option><option value="95">Post Graduate Certificate course on Computer Aided Management</option><option value="96">Post Graduate Certificate course on Medical and Genetic Counselling</option><option value="97">Post Graduate Certificate in Copy Editing and Proof Reading (PGCCP</option><option value="98">Post Graduate Certificate in Cyber Laws (PGCCL)</option><option value="99">Post Graduate Certificate in Indian Patents Law and Procedures (PGCIPLP)</option><option value="100">Post Graduate certificate in Nutrition</option><option value="101">Post Graduate Certificate in Participatory Management of Displacement, Resettlement and Rehabilitation (PGCMRR)</option><option value="102">Post Graduate Certificate in Writing for Television (PGCTW)</option><option value="99999">Other</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-4 control-label" style="padding: 5px;">Duration <b> : </b></label> <div class="col-sm-3"> <select class="form-control"> <option value="-1" selected="">Month</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option> </select> </div> <p>Months</p> </div>');
	newTextBoxDiv.appendTo("#certificate");
	counter++;
    });
 });

 // Start of tab4
 //for Internship
 $(document).ready(function(){
    var counter = 2;
    $("#btn-intern").click(function () {
        if(counter>3){
            alert("Only 3 internships allow");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDiv' + counter);
        newTextBoxDiv.after().html('<hr /><div class="form-group"><label for="cNme" class="col-sm-2 control-label">Company Name</label><div class="col-sm-10"><input type="text" class="form-control" id="cNme"></div></div><div class="form-group"><label class="col-sm-2 control-label">Duration</label><div class="col-sm-10 form-inline"><select class="form-control"> <option value="-1">Day</option> <option value="1">1</option> <option value="2">2</option><option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option><option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option><option value="19" selected="">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> <option value="26">26</option>'+
                '<option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> <option value="31">31</option> </select><span>-</span><select class="form-control"> <option value="-1">Month</option><option value="1">Jan</option> <option value="2">Feb</option> <option value="3">Mar</option> <option value="4">Apr</option> <option value="5">May</option> <option value="6">Jun</option> <option value="7">Jul</option> <option value="8">Aug</option><option value="9">Sep</option> <option value="10">Oct</option> <option value="11">Nov</option> <option value="12" selected="">Dec</option> </select><span>-</span> <select class="form-control"> <option value="-1">Year</option><option value="2002">2002</option> <option value="2001">2001</option> <option value="2000">2000</option> <option value="1999">1999</option> <option value="1998">1998</option> <option value="1997">1997</option> <option value="1996">1996</option>'+
                '<option value="1995">1995</option> <option value="1994">1994</option> <option value="1993">1993</option> <option value="1992">1992</option> <option value="1991" selected="">1991</option> <option value="1990">1990</option> <option value="1989">1989</option><option value="1988">1988</option> <option value="1987">1987</option> <option value="1986">1986</option> <option value="1985">1985</option> <option value="1984">1984</option> <option value="1983">1983</option> <option value="1982">1982</option><option value="1981">1981</option> <option value="1980">1980</option> </select> <span style="margin:0px 10px;"> TO </span> <select class="form-control"> <option value="-1">Day</option> <option value="1">1</option> <option value="2">2</option>'+
                '<option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option><option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option><option value="19" selected="">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option>'+
                '<option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> <option value="31">31</option> </select><span>-</span> <select class="form-control"> <option value="-1">Month</option> <option value="1">Jan</option> <option value="2">Feb</option> <option value="3">Mar</option> <option value="4">Apr</option> <option value="5">May</option> <option value="6">Jun</option> <option value="7">Jul</option> <option value="8">Aug</option> <option value="9">Sep</option> <option value="10">Oct</option> <option value="11">Nov</option> <option value="12" selected="">Dec</option> </select><span>-</span> <select class="form-control"> <option value="-1">Year</option> <option value="2002">2002</option> <option value="2001">2001</option> <option value="2000">2000</option> <option value="1999">1999</option> <option value="1998">1998</option> <option value="1997">1997</option> <option value="1996">1996</option> <option value="1995">1995</option> <option value="1994">1994</option> <option value="1993">1993</option> <option value="1992">1992</option> <option value="1991" selected="">1991</option> <option value="1990">1990</option> <option value="1989">1989</option> <option value="1988">1988</option> <option value="1987">1987</option> <option value="1986">1986</option> <option value="1985">1985</option> <option value="1984">1984</option> <option value="1983">1983</option> <option value="1982">1982</option> <option value="1981">1981</option> <option value="1980">1980</option> </select> </div> </div> <div class="form-group"> <label for="del" class="col-sm-2 control-label">Details</label> <div class="col-sm-10"> <textarea id="del" class="form-control" rows="3"></textarea> </div> </div>');
	newTextBoxDiv.appendTo("#intern");
	counter++;
    });
 });
 
 //for Projects
 $(document).ready(function(){
    var counter = 2;
    $("#btn-project").click(function () {
        if(counter>3){
            alert("Only 3 Projects allow");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDiv' + counter);
        newTextBoxDiv.after().html('<hr /><div class="form-group"> <label for="prj" class="col-sm-2 control-label">Project Title</label> <div class="col-sm-10"> <input type="text" class="form-control" id="prj"> </div> </div> <div class="form-group"> <label for="del1" class="col-sm-2 control-label">Details</label> <div class="col-sm-10"> <textarea id="del1" class="form-control" rows="3"></textarea> </div> </div>');
        newTextBoxDiv.appendTo("#project");
	counter++;
    });
 });
 
//for Computer Skills 
$(document).ready(function(){
    var counter = 2;
    $("#btn-cSkill").click(function () {
        if(counter>4){
            alert("Only 4 Computer Skills allow");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDiv' + counter);
        newTextBoxDiv.after().html('<hr /><div class="row"> <div class="col-sm-6">Skills</div> <div class="col-sm-6">Proficiency</div> </div> <div class="row"> <div class="col-sm-6"><input type="text" class="form-control"></div> <div class="col-sm-6"> <select class="form-control"> <option value="-1">Select</option> <option value="1">Beginner</option> <option value="2">Proficient</option> <option value="3">Expert</option> </select> </div> </div>');
	newTextBoxDiv.appendTo("#cSkill");
	counter++;
    });
 });
 
 //for Language Skills 
$(document).ready(function(){
    var counter = 2;
    $("#btn-lang").click(function () {
        if(counter>4){
            alert("Only 4 Language Skills allow");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDiv' + counter);
        newTextBoxDiv.after().html('<hr /><div class="row"> <div class="col-sm-6">Language</div> <div class="col-sm-6">Proficiency</div> </div> <div class="row"> <div class="col-sm-6"> <select class="form-control"> <option value="-1" selected="">Select</option> <optgroup label="-----International-----"></optgroup> <option value="2">English</option> <option value="3">French</option> <option value="4">Spanish</option> <option value="5">German</option> <option value="6">Japanese</option> <option value="7">Chinese</option> <optgroup label="-----National-----"></optgroup> <option value="9">Assamese/Asomiya </option> <option value="10">Bengali/Bangla</option> <option value="11">Bodo</option> <option value="12">Dogri</option> <option value="13">Gujarati</option> <option value="14">Hindi</option> <option value="15">Kannada</option> <option value="16">Kashmiri</option> <option value="17">Konkani</option> <option value="18">Maithili</option> <option value="19">Malayalam</option> <option value="20">Manipuri</option> <option value="21">Marathi</option> <option value="22">Nepali</option> <option value="23">Oriya</option> <option value="24">Punjabi</option> <option value="25">Sanskrit</option> <option value="26">Santhali</option> <option value="27">Sindhi</option> <option value="28">Tamil</option> <option value="29">Telugu</option> <option value="30">Urdu</option> <option value="31">Other</option> </select> </div> <div class="col-sm-6"> <select class="form-control"> <option value="-1">Select</option> <option value="1">Read/Write</option> <option value="2">Spoken</option> <option value="3">Both</option> </select> </div> </div>');
	newTextBoxDiv.appendTo("#lang");
	counter++;
    });
 });
 
 //for Competitive Exam Score 
$(document).ready(function(){
    var counter = 2;
    $("#btn-cExam").click(function () {
        if(counter>4){
            alert("Only 4 Exam Score allow");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDiv' + counter);
        newTextBoxDiv.after().html('<hr /><div class="row"> <div class="col-sm-6">Name</div> <div class="col-sm-6">Score/Rank</div> </div> <div class="row"> <div class="col-sm-6"> <select class="form-control"> <option value="-1">Select</option><optgroup label="-----International-----"></optgroup><option value="1">TOEFL</option><option value="2">GMAT</option><option value="3">GRE</option><option value="4">SAT</option><option value="5">IELTS</option><option value="6">LSAT</option><option value="7">MCAT</option><optgroup label="-----National-----"></optgroup><option value="8">CAT</option><option value="9">MAT</option><option value="10">AIEEE</option><option value="11">SNAP</option><option value="12">ICFAI</option><option value="13">AIPMT</option><option value="14">GATE</option><option value="15">National Eligibility Test (UGC)</option><option value="16">NAT</option><option value="17">XAT</option><option value="18">MCET</option><option value="19">AICEE</option><option value="20">WBJEE</option><option value="21">DCEE</option><option value="22">CLAT</option><option value="23">IIT JEE</option> </select> </div> <div class="col-sm-6"> <input type="text" class="form-control"> </div> </div>');
	newTextBoxDiv.appendTo("#cExam");
	counter++;
    });
 });
 //End of tab4