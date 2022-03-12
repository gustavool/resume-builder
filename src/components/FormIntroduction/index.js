import Button from '../Button';
import ListItem from '../ListItem';
import TextForm from '../TextForm';
import TitleForm from '../TitleForm';
import * as S from './styles';
export default function FormIntroduction() {
  const stepList = [
    'Personal',
    'Location',
    'Work',
    'Graduation',
    'Certification',
    'Download',
  ];

  return (
    <S.Form>
      <TitleForm>Your resume now!</TitleForm>
      <TextForm>
        With <strong>Resume Builder</strong> is possible to build your resume in
        <strong> six steps</strong>. In each step you add your main information.
        After you finish the steps you can download your resume.
      </TextForm>

      <ListItem list={stepList} />

      <Button href='http://localhost:3000/StepOne'>Start</Button>
    </S.Form>
  );
}
