library(dplyr)
library(ggplot2)
library(lubridate)
library(jsonlite)

library(readr)
X311_Noise_Complaints <- read_csv("Desktop/Noise_complaint/311_Noise_Complaints_2020.csv")

X311_Noise_Complaints$`Created Date` <- as.character(as.Date(X311_Noise_Complaints$`Created Date`, format = "%m/%d/%y"))

new_data_2020 <-  
  X311_Noise_Complaints %>%
  group_by(X311_Noise_Complaints$`Created Date`) %>%
  summarise(total = n())

names(new_data_2020)[1] <- 'Date'

library(readr)
X311_Noise_Complaints_2021 <- read_csv("Desktop/Noise_complaint/311_Noise_Complaints_2021.csv")
X311_Noise_Complaints_2021$`Created Date` <- as.character(as.Date(X311_Noise_Complaints_2021$`Created Date`, format = "%m/%d/%y"))

new_data_2021 <-  
  X311_Noise_Complaints_2021 %>%
  group_by(X311_Noise_Complaints_2021 $`Created Date`) %>%
  summarise(total = n())

names(new_data_2021)[1] <- 'Date'

new_data <- rbind(new_data_2020, new_data_2021)
new_data <- new_data[-540,]
  

new_data<-list(new_data)
exportJSON <- toJSON(new_data, pretty = TRUE)
exportJSON
write_json(new_data, "noise_complaints.json")
