/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.models;

import java.time.LocalDate;

/**
 *
 * @author user
 */
public class User {
  private Integer id;
 private String firstName;
 private String lastName;
 
 public User(Integer id,String firstName, String lastName ){
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
 }
 public Integer getId(){
     return id;
 }
 public void setId(Integer id){
   this.id=id;  
 }
 public String getFirstName(){
     return firstName;
 }
  public void setFirstName(String firstName){
     this.firstName=firstName;  
  }
  
 public String getLastName(){
     return lastName;
}
 
public void setLastName(String lastName){
     this.lastName=lastName;  
  }
}
  

