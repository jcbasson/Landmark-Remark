using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Options;
using Landmark_Remark.api.Models;

namespace Landmark_Remark.api.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class UserMapController : Controller
    {

        // GET api/values
        [HttpGet]
        public UserMap Get()
        {
            return createUserMap();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        public UserMap createUserMap()
        {
            UserMap userMap = new UserMap();
            userMap.MapApiKey = ClientSettings.GoogleMapsApiKey;
            userMap.User = createUser();
            
            return userMap;
        }

        public User createUser()
        {
            User user = new User();
            user.Id = 1;
            user.UserName = "You";
            user.LandMarks = createLandMarks();
            return user;
        }

        public IEnumerable<LandMark> createLandMarks()
        {
            IList<LandMark> landMarks = new List<LandMark>();

            landMarks.Add(createLandMark());
           
            return landMarks;
   
        }

        public LandMark createLandMark()
        {
            LandMark landMark = new LandMark();
        
            landMark.Id = 1;
            landMark.Latitude = -25.363;
            landMark.Longitude = 131.044;
            landMark.Remark = createRemark(1, "This place is awesome!");
            landMark.othersRemarks = createOthersLandMarks();

            return landMark;
        }

        public Remark createRemark(int id, string remarkText)
        {
            Remark remark = new Remark();
            remark.Id = id;
            remark.Text = remarkText;
            return remark;
        }

        public IEnumerable<OtherRemark> createOthersLandMarks()
        {
            IList<OtherRemark> othersRemarks = new List<OtherRemark>();

            othersRemarks.Add(createOthersRemarks(1));
            othersRemarks.Add(createOthersRemarks(2));
            othersRemarks.Add(createOthersRemarks(3));
            othersRemarks.Add(createOthersRemarks(4));

            return othersRemarks;
        }

        public OtherRemark createOthersRemarks(int id)
        {
            OtherRemark otherRemark = new OtherRemark();
            otherRemark.Id = id;
            otherRemark.Remark = createRemark(id, "This place is ok");
            return otherRemark;
        }

    }
}
