using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Landmark_Remark.api.Models
{
    public class Remark
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public DateTime DateMade { get; set; }
        public string LandMarkId { get; set; }
    }
}
