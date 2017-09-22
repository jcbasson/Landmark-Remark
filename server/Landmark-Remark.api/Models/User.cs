using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Landmark_Remark.api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public IEnumerable<LandMark> LandMarks { get; set; }
    }
}

//class UserModel
//{

//    constructor()
//    {
//        this.id = null;
//        this.userName = null;
//        this.landMarks = [];
//    }
//}
////class LandMarkModel
//{

//    constructor()
//    {
//        this.id = null;
//        this.longitude = null;
//        this.latitude = null;
//        this.isHovered = false;
//        this.remark = null;
//         = null;
//        this.othersRemarks = [];
//    }
//}

//class OtherRemarksModel
//{
//    constructor()
//    {
//        this.id = null;
//        this.userName = null;
//        this.remark = null;
//        this.dateMade = null;
//        this.locationId = null;
//    }
//}
//class RemarksModel
//{
//    constructor()
//    {
//        this.id = null;
//        this.remark = null;
//        this.landMark = null;
//    }
//}
