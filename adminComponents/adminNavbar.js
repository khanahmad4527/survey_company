function admin_navbar() {
  return ` <div id="navbar_hamberger">
        <h2><i class="fa-solid fa-bars"></i></h2>
      </div>
      <div id="navbar_img">
      <img src="../images/Survey_Company.png" alt="">
      </div>
      <div id="navbar_content">
        <p class="product">
          Product <span><i class="fa-solid fa-angle-down"></i></span>
        </p>
        <p class="plan">
          Planning <span><i class="fa-solid fa-angle-down"></i></span>
        </p>
      </div>

      <div id="navbar_button">
      
        <button class="butt" >Sign up</button>
        <button class="butt"  >Log in</button>
      </div>`;
}

function admin_navbar_2() {
  return `<div id="ham_product">
        <div>
          <h3>Product</h3>
          <h3><i class="fa-solid fa-angle-down"></i></h3>
        </div>
        <div id="ham_append_product"></div>
      </div>
      <div id="ham_plan">
        <div>
          <h3>Planning</h3>
          <h3><i class="fa-solid fa-angle-down"></i></h3>
        </div>
        <div id="ham_append_plan"></div>
      </div>

      <div id="siginin_button">
        <button>Log in</button>
        <button>Sigin up</button>
      </div>`;
}
function productAppend() {
  return `
        <div id="product_div">
           <h3>Surveys</h3>
           <hr />
           
             <h4>Survey Company</h4>
             <p>
               Create & send surveys with the world's leading online survey
               software
             </p>
           
           
             <h4>Enterprise</h4>
             <p>Empower your organization with our secure survey platform</p>
           
          
             <h4>Integration & Plug-ins</h4>
             <p>Bring survey insights into your business apps</p>
           
           </div>
      
      
        <div>
           <h3>Specialized products</h3>
           <hr />
           
             <h4>Audience</h4>
             <p>
               Create & send surveys with the world's leading online survey
               software
             </p>
           
          
             <h4>CX</h4>
             <p>Empower your organization with our secure survey platform</p>
           
             <h4>Enagage</h4>
             <p>Bring survey insights into your business apps</p>
           
         </div>`;
}

function planAppend() {
  return `<div id="plan_div">
        
          <p>Survey Types</p>
          <hr />
          
            <h4>Survey Satisfaction</h4>
            <h4>Customer Loyalty</h4>
            <h4>Event Surveys</h4>
          
         
            <h4>Employee Engagement</h4>
            <h4>Job Satisfaction</h4>
            <h4>HR Surveys</h4>
       
          
            <h4>Market Research</h4>
            <h4>Opinion Polls</h4>
            <h4>Concept Testing</h4>
          
        
        </div>
        <div>
          <p>People Powered Data for business</p>
          <hr />
          
            <h4>Customers</h4>
            <p>Win more business with Customer Powered Data</p>
          
            <h4>Employees</h4>
            <p>Build a stronger workforce with Employee Powered Data</p>
         
            <h4>Markets</h4>
            <p>Validate business strategy with Market Powered Data</p>
         
      </div>`;
}

export { admin_navbar, admin_navbar_2, planAppend, productAppend };
