import React, { useState, useRef } from 'react';
import { User, Search, Edit2, Plus, X, Image as ImageIcon, BookOpen, Clock, Calendar, Check, Trash2, Edit } from 'lucide-react';
import StatCard from '../components/StatCard';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const initialPrograms = [
  {
    title: 'Medicine & Health Science',
    fee: '$35',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    departments: [
      { name: 'General Medicine', duration: '6' },
      { name: 'Nursing & Midwifery', duration: '4' },
      { name: 'Dentistry', duration: '5' },
      { name: 'Pharmacy', duration: '4' },
      { name: 'Public Health', duration: '4' }
    ]
  },
  {
    title: 'Computer Science & IT',
    fee: '$25',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    departments: [
      { name: 'Computer Science', duration: '4' },
      { name: 'Information Technology', duration: '4' },
      { name: 'Software Engineering', duration: '4' },
      { name: 'Cybersecurity', duration: '4' }
    ]
  },
  {
    title: 'Faculty of Education',
    fee: '$20',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    departments: [
      { name: 'Primary Education', duration: '4' },
      { name: 'Secondary Education', duration: '4' },
      { name: 'Special Needs Education', duration: '4' }
    ]
  },
  {
    title: 'Faculty of Engineering',
    fee: '$30',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    departments: [
      { name: 'Civil Engineering', duration: '5' },
      { name: 'Electrical Engineering', duration: '5' },
      { name: 'Mechanical Engineering', duration: '5' },
      { name: 'Telecommunication Engineering', duration: '5' }
    ]
  },
  {
    title: 'Faculty of Business & Economics',
    fee: '$25',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    departments: [
      { name: 'Business Administration', duration: '4' },
      { name: 'Public Administration', duration: '4' },
      { name: 'Accounting & Finance', duration: '4' },
      { name: 'Human Resource Management', duration: '4' }
    ]
  },
  {
    title: 'Faculty of Law & Sharia',
    fee: '$20',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    departments: [
      { name: 'Sharia & Law', duration: '4' },
      { name: 'Public Law', duration: '4' },
      { name: 'Private Law', duration: '4' }
    ]
  }
];

const Programs = () => {
  const [programs, setPrograms] = useState(initialPrograms);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeptModalOpen, setIsDeptModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Selected Faculty for Detail Modal
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // Inline Edit Department States
  const [editingDeptIndex, setEditingDeptIndex] = useState(null);
  const [editDeptName, setEditDeptName] = useState('');
  const [editDeptDuration, setEditDeptDuration] = useState('');

  // New Faculty Modal Form State
  const [facultyName, setFacultyName] = useState('');
  const [fee, setFee] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);

  // New Department Modal Form State
  const [deptFaculty, setDeptFaculty] = useState('');
  const [deptName, setDeptName] = useState('');
  const [deptDuration, setDeptDuration] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSaveFaculty = (e) => {
    e.preventDefault();
    if (!facultyName || !fee) return;

    const newFaculty = {
      title: facultyName,
      fee: fee.startsWith('$') ? fee : `$${fee}`,
      image: imagePreview || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      departments: []
    };

    setPrograms([newFaculty, ...programs]);

    // Reset Form & Close Modal
    setFacultyName('');
    setFee('');
    setSelectedImage(null);
    setImagePreview('');
    setIsModalOpen(false);
  };

  const handleCancelFaculty = () => {
    setFacultyName('');
    setFee('');
    setSelectedImage(null);
    setImagePreview('');
    setIsModalOpen(false);
  };

  const handleOpenDeptModal = (e, facultyTitle) => {
    e.stopPropagation(); // Avoid opening the Faculty Detail card
    setDeptFaculty(facultyTitle);
    setIsDeptModalOpen(true);
  };

  const handleSaveDept = (e) => {
    e.preventDefault();
    if (!deptFaculty || !deptName || !deptDuration) return;

    // Dynamically add the new department to the selected faculty in the state list
    setPrograms(programs.map(p => {
      if (p.title === deptFaculty) {
        return {
          ...p,
          departments: [...p.departments, { name: deptName, duration: deptDuration }]
        };
      }
      return p;
    }));

    // Reset & Close
    setDeptFaculty('');
    setDeptName('');
    setDeptDuration('');
    setIsDeptModalOpen(false);
  };

  const handleCancelDept = () => {
    setDeptFaculty('');
    setDeptName('');
    setDeptDuration('');
    setIsDeptModalOpen(false);
  };

  const handleOpenDetailModal = (faculty) => {
    setSelectedFaculty(faculty);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedFaculty(null);
    setEditingDeptIndex(null);
    setIsDetailModalOpen(false);
  };

  // CRUD Registered Department Functions
  const startEditDept = (index, dept) => {
    setEditingDeptIndex(index);
    setEditDeptName(dept.name);
    setEditDeptDuration(dept.duration);
  };

  const saveEditDept = (index) => {
    if (!selectedFaculty || !editDeptName || !editDeptDuration) return;

    const updatedDepartments = selectedFaculty.departments.map((dept, i) => {
      if (i === index) {
        return { name: editDeptName, duration: editDeptDuration };
      }
      return dept;
    });

    // Update programs state
    const updatedPrograms = programs.map(p => {
      if (p.title === selectedFaculty.title) {
        return {
          ...p,
          departments: updatedDepartments
        };
      }
      return p;
    });
    setPrograms(updatedPrograms);

    // Update selected faculty reference to refresh detail modal UI
    setSelectedFaculty({
      ...selectedFaculty,
      departments: updatedDepartments
    });

    setEditingDeptIndex(null);
  };

  const cancelEditDept = () => {
    setEditingDeptIndex(null);
  };

  const deleteDept = (index) => {
    if (!selectedFaculty) return;
    const updatedDepartments = selectedFaculty.departments.filter((_, i) => i !== index);

    // Update programs state
    const updatedPrograms = programs.map(p => {
      if (p.title === selectedFaculty.title) {
        return {
          ...p,
          departments: updatedDepartments
        };
      }
      return p;
    });
    setPrograms(updatedPrograms);

    // Update selected faculty reference to refresh detail modal UI
    setSelectedFaculty({
      ...selectedFaculty,
      departments: updatedDepartments
    });
  };

  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
        <StatCard icon={User} title="Total Programs" value="1,284" color="#22c55e" iconColor="#22c55e" />
        <StatCard icon={User} title="Total Faculties" value={programs.length.toString()} color="#d97706" iconColor="#d97706" />
        <StatCard icon={User} title="Total Admission fees" value="$684" color="#d97706" iconColor="#d97706" />
      </div>

      <Card className="flex items-center gap-[15px] p-4 flex-wrap">
        <div className="flex-1 relative min-w-[200px]">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input type="text" className="w-full bg-main-bg border border-white/5 text-white rounded-xl py-3.5 pl-[44px] pr-4 text-[13px] outline-none focus:border-primary transition-colors placeholder-gray-500" placeholder="Search Name, email ..." />
        </div>
        <select className="bg-main-bg border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none min-w-[160px] appearance-none pr-10 cursor-pointer" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
          <option>All Status</option>
        </select>
        <select className="bg-main-bg border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none min-w-[160px] appearance-none pr-10 cursor-pointer" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
          <option>All Faculties</option>
        </select>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-opacity-90 text-white rounded-xl px-6 py-3.5 text-[13px] font-medium transition-colors ml-auto whitespace-nowrap cursor-pointer"
        >
          Add Faculty
        </button>
      </Card>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        {programs.map((program, index) => (
          <Card
            key={index}
            onClick={() => handleOpenDetailModal(program)}
            className="flex flex-col overflow-hidden cursor-pointer hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="overflow-hidden relative h-[180px]">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090217] via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-[18px] font-semibold text-white mb-2 font-jakarta">{program.title}</h3>
              <p className="text-[16px] font-semibold text-white mb-6">
                <span className="text-[#3b82f6] font-medium font-sans">Fee - </span>{program.fee}
              </p>

              <div className="mt-auto flex flex-col gap-3">
                <button
                  onClick={(e) => handleOpenDeptModal(e, program.title)}
                  className="flex items-center justify-center gap-2 bg-transparent text-gray-400 border border-dashed border-white/10 rounded-lg p-3 text-[14px] font-medium hover:border-white/30 hover:text-white transition-all cursor-pointer w-full"
                >
                  <Plus size={16} /> Add program
                </button>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-2 bg-transparent text-gray-400 border border-dashed border-white/10 rounded-lg p-3 text-[14px] font-medium hover:border-white/30 hover:text-white transition-all cursor-pointer w-full"
                >
                  <Edit2 size={16} /> Edit
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* New Faculty Modal overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#090217] border border-[#150D25] w-full max-w-[560px] rounded-[24px] p-8 relative flex flex-col animate-fade-in font-sans">
            {/* Close Button */}
            <button
              onClick={handleCancelFaculty}
              className="absolute right-8 top-8 w-8 h-8 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Title */}
            <h2 className="text-white text-[20px] font-bold tracking-tight mb-6 font-jakarta">New Faculty</h2>

            {/* Form */}
            <form onSubmit={handleSaveFaculty} className="flex flex-col">
              {/* Upload Image Section */}
              <div
                onClick={triggerFileInput}
                className="w-full border-2 border-dashed border-[#894EEF]/30 hover:border-[#894EEF]/60 transition-all rounded-[16px] bg-[#070211]/50 h-[140px] flex flex-col items-center justify-center cursor-pointer gap-2 overflow-hidden relative"
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="Upload Preview" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                ) : (
                  <div className="flex items-center gap-2.5 text-[#894EEF] font-semibold text-[13px]">
                    <ImageIcon size={18} />
                    <span>Click to upload</span>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {/* Faculty Name */}
              <div className="flex flex-col mt-6">
                <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">Faculty Name</label>
                <input
                  type="text"
                  value={facultyName}
                  onChange={(e) => setFacultyName(e.target.value)}
                  className="w-full bg-[#070211] border border-white/5 text-white rounded-2xl px-5 py-4 text-[13px] outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Fee Admission */}
              <div className="flex flex-col mt-6">
                <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">Fee (Admission)</label>
                <input
                  type="text"
                  value={fee}
                  onChange={(e) => setFee(e.target.value)}
                  className="w-full bg-[#070211] border border-white/5 text-white rounded-2xl px-5 py-4 text-[13px] outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-8">
                <button
                  type="button"
                  onClick={handleCancelFaculty}
                  className="bg-transparent border border-white/10 hover:bg-white/5 text-white rounded-full px-8 py-3 text-[13px] font-semibold transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-opacity-90 text-white rounded-full px-8 py-3 text-[13px] font-semibold transition-all cursor-pointer"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* New Department Modal overlay */}
      {isDeptModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#090217] border border-[#150D25] w-full max-w-[560px] rounded-[24px] p-8 relative flex flex-col animate-fade-in font-sans">
            {/* Close Button */}
            <button
              onClick={handleCancelDept}
              className="absolute right-8 top-8 w-8 h-8 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Title */}
            <h2 className="text-white text-[20px] font-bold tracking-tight mb-6 font-jakarta">New department</h2>

            {/* Form */}
            <form onSubmit={handleSaveDept} className="flex flex-col">
              {/* Faculty Select */}
              <div className="flex flex-col">
                <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">Faculty</label>
                <div className="relative">
                  <select
                    value={deptFaculty}
                    onChange={(e) => setDeptFaculty(e.target.value)}
                    className="w-full bg-[#070211] border border-white/5 text-white rounded-2xl px-5 py-4 text-[13px] outline-none appearance-none pr-12 cursor-pointer"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center'
                    }}
                    required
                  >
                    <option value="" disabled>Select Faculty</option>
                    {programs.map((p, idx) => (
                      <option key={idx} value={p.title}>{p.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Department Name */}
              <div className="flex flex-col mt-6">
                <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">Department Name</label>
                <input
                  type="text"
                  value={deptName}
                  onChange={(e) => setDeptName(e.target.value)}
                  className="w-full bg-[#070211] border border-white/5 text-white rounded-2xl px-5 py-4 text-[13px] outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Duration (Year) */}
              <div className="flex flex-col mt-6">
                <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">Duration (Year)</label>
                <input
                  type="text"
                  value={deptDuration}
                  onChange={(e) => setDeptDuration(e.target.value)}
                  className="w-[200px] bg-[#070211] border border-white/5 text-white rounded-2xl px-5 py-4 text-[13px] outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-8">
                <button
                  type="button"
                  onClick={handleCancelDept}
                  className="bg-transparent border border-white/10 hover:bg-white/5 text-white rounded-full px-8 py-3 text-[13px] font-semibold transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-opacity-90 text-white rounded-full px-8 py-3 text-[13px] font-semibold transition-all cursor-pointer"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Faculty Detail Info Card Modal */}
      {isDetailModalOpen && selectedFaculty && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#090217] border border-[#150D25] w-full max-w-[620px] rounded-[28px] overflow-hidden relative flex flex-col animate-fade-in font-sans shadow-2xl">
            {/* Float Close Button */}
            <button
              onClick={handleCloseDetailModal}
              className="absolute right-5 top-5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 flex items-center justify-center text-white hover:scale-105 transition-all cursor-pointer z-10"
            >
              <X size={16} />
            </button>

            {/* Banner Image */}
            <div className="w-full h-[220px] relative shrink-0">
              <img src={selectedFaculty.image} alt={selectedFaculty.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090217] via-[#090217]/50 to-transparent"></div>
            </div>

            {/* Modal Content */}
            <div className="p-8 flex flex-col flex-1 min-h-0">
              <h2 className="text-white text-[24px] font-bold tracking-tight mb-2 font-jakarta">{selectedFaculty.title}</h2>
              <div className="flex items-center gap-4 text-gray-400 text-[13px] font-medium mb-6">
                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary" /> Established: 2012</span>
                <span className="flex items-center gap-1.5"><BookOpen size={14} className="text-primary" /> {selectedFaculty.departments.length} Departments</span>
              </div>

              {/* Fee and Info metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#070211]/50 border border-white/5">
                  <p className="text-gray-500 text-[11px] font-medium uppercase tracking-wider mb-1">Admission Fee</p>
                  <p className="text-[#3b82f6] text-[18px] font-bold">{selectedFaculty.fee}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#070211]/50 border border-white/5">
                  <p className="text-gray-500 text-[11px] font-medium uppercase tracking-wider mb-1">Total Enrollment</p>
                  <p className="text-white text-[18px] font-bold">428 Students</p>
                </div>
              </div>

              <div className="border-t border-white/5 my-4"></div>

              {/* Departments Registered List */}
              <h3 className="text-white text-[15px] font-bold mb-4 font-jakarta flex items-center gap-2">
                <BookOpen size={16} className="text-primary" /> Registered Departments
              </h3>

              <div className="flex flex-col gap-3 overflow-y-auto pr-1 max-h-[220px] custom-scrollbar">
                {selectedFaculty.departments.length === 0 ? (
                  <p className="text-gray-500 text-[13px] py-4 text-center">No departments registered yet. Click "Add program" on the main screen to register one!</p>
                ) : (
                  selectedFaculty.departments.map((dept, i) => {
                    const isEditing = editingDeptIndex === i;

                    return (
                      <div key={i} className="flex items-center justify-between p-4 bg-[#070211]/40 border border-white/5 rounded-2xl hover:bg-white/[0.01] transition-all group">
                        {isEditing ? (
                          /* INLINE EDIT MODE */
                          <div className="flex items-center gap-3 w-full">
                            <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-bold text-[12px]">
                              {i + 1}
                            </div>
                            <div className="flex-1 flex gap-2">
                              <input
                                type="text"
                                value={editDeptName}
                                onChange={(e) => setEditDeptName(e.target.value)}
                                className="flex-1 bg-[#070211] border border-white/10 text-white text-[13px] rounded-lg px-3 py-1.5 outline-none focus:border-primary"
                                placeholder="Department Name"
                                required
                              />
                              <input
                                type="text"
                                value={editDeptDuration}
                                onChange={(e) => setEditDeptDuration(e.target.value)}
                                className="w-[70px] bg-[#070211] border border-white/10 text-white text-[13px] rounded-lg px-3 py-1.5 outline-none focus:border-primary text-center"
                                placeholder="Duration"
                                required
                              />
                            </div>
                            <div className="flex items-center gap-1.5 ml-2">
                              <button
                                onClick={() => saveEditDept(i)}
                                className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 hover:bg-green-500 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                              >
                                <Check size={14} />
                              </button>
                              <button
                                onClick={cancelEditDept}
                                className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* STANDARD DISPLAY MODE */
                          <>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-[12px]">
                                {i + 1}
                              </div>
                              <span className="text-white text-[14px] font-medium">{dept.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1.5 text-gray-400 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-[11px] font-semibold">
                                <Clock size={11} className="text-primary" /> {dept.duration} Years
                              </span>
                              {/* Edit & Delete Action Buttons */}
                              <div className="flex items-center gap-1 opacity-40 hover:opacity-100 group-hover:opacity-100 transition-all duration-200">
                                <button
                                  onClick={() => startEditDept(i, dept)}
                                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                                  title="Edit Department"
                                >
                                  <Edit size={12} />
                                </button>
                                <button
                                  onClick={() => deleteDept(i)}
                                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-500 transition-all flex items-center justify-center cursor-pointer"
                                  title="Delete Department"
                                >
                                  <Trash2 size={12} />
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Programs;
