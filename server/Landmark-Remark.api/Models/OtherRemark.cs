using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Landmark_Remark.api.Models
{
    public class OtherRemark
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public Remark Remark { get; set; }
        public int LocationId { get; set; }
    }
}
