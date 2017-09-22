using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Landmark_Remark.api.Models
{
    public class LandMark
    {
        public int Id { get; set; }
        public Double Longitude { get; set; }
        public Double Latitude { get; set; }
        public Remark Remark { get; set; }
        public IEnumerable<OtherRemark> othersRemarks { get; set; }
    }
}
