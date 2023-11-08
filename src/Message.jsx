function Message({mode,amount,durate,user,storage,project,acces,privat,phone,domin,status,but}){
    return <>
         <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{mode}</h5>
            <h6 class="card-price text-center">{amount}<span class="period">{durate}</span></h6>
            
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{user}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{project}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{acces}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{privat}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{phone}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{domin}
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{status}
                </li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">{but}</a>
            </div>
          </div>
        </div>
      </div>
  
    </>
    
}
export default Message;
