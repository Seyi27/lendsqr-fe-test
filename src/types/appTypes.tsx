/**************** Custom Button ******************* */

export type CustomButtonProps = {
  width?: string;
  height?: string;
  textColor?: string;
  bgColor?: string;
  label: string;
  icon?: React.ReactNode;
  fontSize?: number;
  fontWeight?: number;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  loader?: boolean;
  loaderColor?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Type for onClick
  disabled?: boolean;
};

/**************** Custom Textinput ******************* */

export type CustomTextInputProps = {
  type: "normal" | "password";
  name: string;
  value: string;
  errorMessage?: string;
  handleTextInput: (key: string, e: string) => void;
  placeholder?: string;

  readOnly?: boolean;
};

/************ Menu sidebar ***********/

export type MenuSidebarProp = {
  isOpen: boolean;
  closeModal: () => void;
};

/************ Stat Card ***********/

export type StatCardType = {
  label: string;
  value: number | string | undefined;
  icon: string;
};

export type StatCardProp = {
  data: StatCardType;
};

export type StatCardSectionProp = {
  data: StatCardType[];
  loader?: boolean;
};

/*********** users table ************ */

export interface UsersTableType {
  data?: UsersData;
  loader: boolean;
}

/**************** dropdown select type ******************* */

export type DropdownSelectType = {
  label: string;
  value: string;
};

/************ filter modal sidebar ***********/

export type FilterModalProp = {
  closeModal: () => void;
};

export type UsersData = {
  stats: {
    users: string;
    active_users: string;
    users_with_loans: string;
    users_with_savings: string;
  };
  users: User[];
};

/************ user data ***********/

export interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: number;
  status: string;
  gender: string;
  full_name: string;
  user_id: string;
  user_tier: number;
  balance: number;
  account_no: string;
  bank_account: string;
  marital_status: string;
  children: boolean;
  residence_type: string;
  bvn: string;
  education_level: string;
  employment_status: string;
  employment_sector: string;
  employment_duration: string;
  official_email: string;
  monthly_income: string;
  loan_repayment: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  guarantor_name: string;
  guarantor_phone: string;
  guarantor_email: string;
  guarantor_relationship: string;
}

/************ pagination props ***********/

export type PaginationProps = {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
};