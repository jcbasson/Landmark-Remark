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
                Address = "Sydney, NSW, Australia",
                Latitude = -33.865143,
                Longitude = 151.209900
            },
           new LandMark() {
               Address = "Cairns City, QLD, Australia",
               Latitude = -16.925491,
               Longitude = 145.754120
           },
           new LandMark() {
               Address = "Perth, WA, Australia",
               Latitude = -31.953512,
               Longitude = 115.857048
           },
        new LandMark() {
               Address = "Mildura, VIC, Australia",
               Latitude = -34.206841,
               Longitude = 142.136490
           },
        new LandMark() {
               Address = "Ziyou Today, Greenvale, Victoria, Australia",
               Latitude = -37.649967,
               Longitude = 144.880600
           },
        new LandMark() {
               Address = "Coffs Harbour NSW 2450",
               Latitude = -30.296276,
               Longitude = 153.114136
           },
         new LandMark() {
               Address = "Orange, NSW, Australia",
               Latitude = -33.283577,
               Longitude = 149.101273
           },
         new LandMark() {
               Address = "Albury, NSW, Australia",
               Latitude = -36.080780,
               Longitude = 146.9164736
           },
         new LandMark() {
               Address = "Wollongong, NSW, Australia",
               Latitude = -34.425072,
               Longitude = 150.893143
           },
         new LandMark() {
               Address = "Darwin, Northern Territory",
               Latitude = -12.462827,
               Longitude = 130.841782
           },
          new LandMark() {
               Address = "Terrey Hills, NSW, Australia",
               Latitude = -33.683212,
               Longitude = 151.224396
           },
         new LandMark() {
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
                landMark.Id = $"LandMark_{landMark.Latitude}_{landMark.Longitude}";
                landMark.Remark = createRemark($"{landMark.Address} is awesome!", landMark.Id);
                landMark.othersRemarks = createOthersLandMarks(landMark.Id, landMark.Address);
            }
            return Cities;
        }


        public Remark createRemark(string remarkText, string locationId)
        {
            Remark remark = new Remark();
            Random rnd = new Random();
            int randomId = rnd.Next(1, 10000);
            remark.Id = $"Remark_{locationId}_{randomId}";
            remark.Text = remarkText;
            remark.DateMade = DateTime.Now;
            remark.LandMarkId = locationId;
            return remark;
        }

        public IEnumerable<OtherRemark> createOthersLandMarks(string locationId, string locationAddress)
        {
            IList<OtherRemark> othersRemarks = new List<OtherRemark>();

            othersRemarks.Add(createOthersRemarks(locationId, locationAddress));
            othersRemarks.Add(createOthersRemarks(locationId, locationAddress));
            othersRemarks.Add(createOthersRemarks(locationId, locationAddress));
            othersRemarks.Add(createOthersRemarks(locationId, locationAddress));

            return othersRemarks;
        }

        public OtherRemark createOthersRemarks(string locationId, string locationAddress)
        {
            OtherRemark otherRemark = new OtherRemark();
            Random rnd = new Random();
            int randomId = rnd.Next(1, 10000);
            otherRemark.Id = $"OthersRemark_{locationId}_{randomId}"; ;
            otherRemark.UserName = $"Someone{randomId}";
            otherRemark.LocationId = locationId;
            otherRemark.Remark = createRemark($"This place {locationAddress} is ok", locationId);
            return otherRemark;
        }

    }
}
