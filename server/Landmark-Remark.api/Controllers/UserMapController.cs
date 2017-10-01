using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Options;
using Landmark_Remark.api.Models;
using System;

namespace Landmark_Remark.api.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class UserMapController : Controller
    {

        private IList<LandMark> Cities = new List<LandMark> {
        
            new LandMark()
            {
                Id = 1,
                Address = "Sydney, NSW, Australia",
                Latitude = -33.865143,
                Longitude = 151.209900
            },
           new LandMark() {
               Id = 2,
               Address = "Cairns City, QLD, Australia",
               Latitude = -16.925491,
               Longitude = 145.754120
           },
           new LandMark() {
               Id = 3,
               Address = "Perth, WA, Australia",
               Latitude = -31.953512,
               Longitude = 115.857048
           },
        new LandMark() {
               Id = 4,
               Address = "Mildura, VIC, Australia",
               Latitude = -34.206841,
               Longitude = 142.136490
           },
        new LandMark() {
               Id = 5,
               Address = "Ziyou Today, Greenvale, Victoria, Australia",
               Latitude = -37.649967,
               Longitude = 144.880600
           },
        new LandMark() {
               Id = 6,
               Address = "Coffs Harbour NSW 2450",
               Latitude = -30.296276,
               Longitude = 153.114136
           },
         new LandMark() {
               Id = 7,
               Address = "Orange, NSW, Australia",
               Latitude = -33.283577,
               Longitude = 149.101273
           },
         new LandMark() {
               Id = 8,
               Address = "Albury, NSW, Australia",
               Latitude = -36.080780,
               Longitude = 146.9164736
           },
         new LandMark() {
               Id = 9,
               Address = "Wollongong, NSW, Australia",
               Latitude = -34.425072,
               Longitude = 150.893143
           },
         new LandMark() {
               Id = 10,
               Address = "Darwin, Northern Territory",
               Latitude = -12.462827,
               Longitude = 130.841782
           },
          new LandMark() {
               Id = 11,
               Address = "Terrey Hills, NSW, Australia",
               Latitude = -33.683212,
               Longitude = 151.224396
           },
         new LandMark() {
               Id = 12,
               Address = "Melbourne, VIC, Australia",
               Latitude = -37.814251,
               Longitude = 144.963169
           }};
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
            foreach (var landMark in Cities)
            {
                landMark.Remark = createRemark(1, $"{landMark.Address} is awesome!", landMark.Id);
                landMark.othersRemarks = createOthersLandMarks(landMark.Id);
            }    
            return Cities;
        }

        public LandMark createLandMark()
        {
            LandMark landMark = new LandMark();
        
            landMark.Id = 1;
            landMark.Address = "Sydney, NSW, Australia";
            landMark.Latitude = -33.865143;
            landMark.Longitude = 151.209900;
            landMark.Remark = createRemark(1, $"{landMark.Address} is awesome!", landMark.Id);
            landMark.othersRemarks = createOthersLandMarks(landMark.Id);

            return landMark;
        }

        public Remark createRemark(int id, string remarkText, int locationId)
        {
            Remark remark = new Remark();
            remark.Id = id;
            remark.Text = remarkText;
            remark.DateMade = DateTime.Now;
            remark.LandMarkId = locationId;
            return remark;
        }

        public IEnumerable<OtherRemark> createOthersLandMarks(int locationId)
        {
            IList<OtherRemark> othersRemarks = new List<OtherRemark>();

            othersRemarks.Add(createOthersRemarks(1, locationId));
            othersRemarks.Add(createOthersRemarks(2, locationId));
            othersRemarks.Add(createOthersRemarks(3, locationId));
            othersRemarks.Add(createOthersRemarks(4, locationId));

            return othersRemarks;
        }

        public OtherRemark createOthersRemarks(int id, int locationId)
        {
            OtherRemark otherRemark = new OtherRemark();
            otherRemark.Id = id;
            otherRemark.UserName = $"Someone{id}";
            otherRemark.LocationId = locationId;
            otherRemark.Remark = createRemark(id, "This place is ok", locationId);
            return otherRemark;
        }

    }
}
