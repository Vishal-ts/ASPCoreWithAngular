using ASPCoreWithAngular.Interfaces;
using ASPCoreWithAngular.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;


namespace ASPCoreWithAngular.DataAccess
{
    public class CityDataAccessLayer : ICity
    {
        private string connectionString;
        public CityDataAccessLayer(IConfiguration configuration)
        {
            connectionString = configuration["ConnectionStrings:DefaultConnection"];
        }

        public IEnumerable<City> GetAllCitites()
        {
            try
            {
                List<City> lstCity = new List<City>();

                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetAllCities", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        City city = new City();

                        city.CityId = Convert.ToInt32(rdr["CityId"]);
                        city.CityName = rdr["Name"].ToString();


                        lstCity.Add(city);
                    }
                    con.Close();
                }
                return lstCity;
            }
            catch
            {
                throw;
            }
        }


        //To Add new City record 
        public int AddCity(City city)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spAddCity", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@CityName", city.CityName);
                 
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar City
        public int UpdateEmployee(City city)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spUpdateCity", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@CityId", city.CityId);
                    cmd.Parameters.AddWithValue("@CityName", city.CityName);

                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular City
        public City GetCityData(int id)
        {
            try
            {
                City city = new City();

                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM tblCity WHERE CityId= " + id;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);

                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        city.CityId = Convert.ToInt32(rdr["CityId"]);
                        city.CityName = rdr["CityName"].ToString();
                       
                    }
                }
                return city;
            }
            catch
            {
                throw;
            }
        }


        //To Delete the record on a particular City
        public int DeleteCity(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteCity", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@CityId", id);

                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

    }

   


}


