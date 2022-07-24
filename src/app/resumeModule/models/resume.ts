
export interface iLanguage{
	LanguageName:string | null ,
	Writing:number | null,
	Reading:number ,
	Speaking:number ,
	Listening:number ,
	IsMotherTongue:boolean ,
}

export interface iPersonalInfo{
	DisplayName:string | null,
	SummaryText:string | null,
	AboutMe:string | null,
	DOB:Date | null ,
	Gender:string | null,
	Nationality:string | null,
	CurrentCountry:string | null,
	City:string | null,
	Province:string | null,
	ZipCode:string | null,
	Hobbies:string | null,
	Email:string | null,
	AlternateEmail:string | null,
	PhoneNO:string | null,
	AlternatePhoneNo:string | null,
	ImgUrl:string | null,
}

export interface iQualification{
	Study:string | null,
	StudyTitle:string | null,
	InstitutionUrl:string | null,
	InstitutionName:string | null,
	Country:string | null,
	City:string | null,
	Province:string | null,
	ZipCode:string | null,
	StudyFrom:Date |null ,
	StudyTo:Date | null ,
	StillOn:boolean ,
	HideFromCV:boolean ,
	Stream:string | null,
}

export interface iExperience{
	Position:string | null,
	OrganizationUrl:string |null,
	OrganizationName:string | null,
	Country:string | null,
	City:string | null,
	Province:string | null,
	ZipCode:string | null,
	ExperienceFrom:number ,
	ExperienceTo:number ,
	StillWorking:boolean ,
	Responsibilities:string | null,
	OrganizationImg:string | null,
}