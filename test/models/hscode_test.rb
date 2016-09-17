require 'test_helper'

class HscodeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # hscodes(:one)
  # hscodes(:two)
  # hscodes(:one_rel)
  # hscodes(:one_not_rel)
  # end

  # Test related codes model
  
  def setup
    @search_description = HscodeSearch.new('First')
    @search_code = HscodeSearch.new('2000')
    @hscode_first = hscodes(:one)
    @hscode_second = hscodes(:two)
  end

  test "should search hscodes by name" do
    response = @search_description.search
    assert_equal response[0], @hscode_first
    assert_not_equal response[0], @hscode_second
  end

  test "should search hscodes by code" do
    response = @search_code.search
    assert_not_equal response[0], @hscode_first
    assert_equal response[0], @hscode_second
  end
end
